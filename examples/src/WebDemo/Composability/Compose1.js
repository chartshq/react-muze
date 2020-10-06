import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Headers, Encoding, POSITION, ALIGNMENT } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const operationFn = dm => {
    let dm1 = dm.groupBy(['Year', 'Origin']);
    return dm1.sort([['Horsepower', 'DESC']]);
}

const title = Headers.config().content('Sorted bar with trendline').position(POSITION.TOP).align(ALIGNMENT.LEFT).create();
const subtitle = Headers.config().content('Average horsepower per year with average horsepower of all time marked as reference').position(POSITION.TOP).align(ALIGNMENT.LEFT).create();
const textEncoding = Encoding.Text.config().text({
    field: "Horsepower",
    formatter: (value) => `Average Horsepower: ${Math.round(value)}`
}).create();

const composeLayers = Layer.Operators.compose;
// layerFactory.customName = 'hello world';
composeLayers('compositeBar', [
    {
        name: 'simplebar',
        mark: 'bar',
        encoding: {
            x: 'compositeBar.encoding.x',
            y: 'compositeBar.encoding.y',
            color: 'compositeBar.encoding.color',
        }
    },
    {
        name: 'averageLine',
        mark: 'tick',
        source: 'averageLine',
        className: 'averageLine',
        encoding: {
            y: 'compositeBar.encoding.y',
            x: null
        },
        calculateDomain: false
    },
    {
        name: 'averageText',
        mark: 'text',
        source: 'averageLine',
        className: 'averageText',
        encoding: {
            y: 'compositeBar.encoding.y',
            text: 'compositeBar.encoding.text',
            background: {
                enabled: true
            }
        },
        encodingTransform: (points, layer, dependencies) => {
            let width = layer.measurement().width;
            let smartLabel = dependencies.smartLabel;
            for (let i = 0; i < points.length; i++) {
                let size = smartLabel.getOriSize(points[i].text);
                points[i].update.x = width - 5;
                points[i].textanchor = 'end';
                points[i].update.y -= size.height / 2;
                points[i].color = '#000';
            }
            return points;
        },
        calculateDomain: false
    }
]);

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
        };
    }

    componentDidMount() {
        createDataModel().then((carsDm) => {
            this.setState({ carsDm });
        });
    }

    render() {
        const { carsDm } = this.state;

        return (
            <Muze data={carsDm}>
                <Canvas
                    rows={["Horsepower"]}
                    columns={["Year"]}
                    operation={operationFn}
                    transform={{
                        averageLine: (dt) => dt.groupBy([''])
                    }}
                    autoGroupBy={false}
                    title={title}
                    subtitle={subtitle}
                >
                    <Layer mark="compositeBar" encoding={textEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

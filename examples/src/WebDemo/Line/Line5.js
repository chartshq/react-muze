import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { html, Tooltip, Color, Size, Encoding, Axes, Headers, ALIGNMENT, Legend } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/covid19-complete.csv")
        .then((d) => d.text());
    const numberFormat = new Intl.NumberFormat();
    const schema = [{
        name: 'Country/Region',
        type: 'dimension'
    }, {
        name: 'Confirmed',
        type: 'measure',
        format: (value) => numberFormat.format(value)
    }, {
        name: 'Date',
        type: 'dimension',
        subtype: 'temporal',
        format: '%Y-%m-%d'
    }];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const operationFn = (dm) => {
    return dm = dm.select({
        field: 'Country/Region',
        value: ['US', 'India', 'Brazil'],
        operator: DataModel.ComparisonOperators.IN
    });
}

class Line extends React.Component {
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
        const text1 = Encoding.Text.create({
            text: 'Country/Region',
            color: {
                value: () => 'black'
            },
            y: {
                value: (d) => d.y - 7
            },
            x: {
                value: (d) => d.x - 10
            }
        });

        // const text1 = Encoding.Text.config().text('displayWord').color({
        //     value: () => '#000'
        // }).create();

        const lineSource = (dm) => {
            return dm.select({
                field: 'Date',
                value: dm.getField('Date').domain()[1],
                operator: 'eq'
            });
        };

        return (
            <Muze data={carsDm}>
                <Canvas rows={['Confirmed']} columns={['Date']} color='Country/Region' operation={operationFn}>
                    <Layer mark="line" />
                    <Layer mark="text" encoding={text1} source={lineSource} />
                </Canvas>
            </Muze>
        );
    }
}

export default Line;

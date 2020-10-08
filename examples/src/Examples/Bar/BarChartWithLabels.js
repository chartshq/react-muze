import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Axes, Encoding } from "@chartshq/react-muze/configurations";

const numberFormat = new Intl.NumberFormat();

async function createDataModel() {
    const data = await fetch("/data/covid19.csv")
        .then((d) => d.text());
    const schema = [{
        name: 'Country/Region',
        type: 'dimension'
    }, {
        name: 'Confirmed',
        type: 'measure',
        format: (value) => numberFormat.format(value)
    }]
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const operationFn = (dm) => {
    return dm.sort([['Confirmed']]);
}

const axes = Axes.LinearAxis.config().show(false).create();
const text = Encoding.Text.config()
    .create({
        text: {
            field: 'Confirmed',
            formatter: (value) => numberFormat.format(value),
            value: (d) => {
                return d.x + 25;
            }
        },
        color: {
            value: () => 'black'
        },
        x: {
            value: (d) => d.x + 25
        }
    });

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dm: null,
        };
    }

    componentDidMount() {
        createDataModel().then((dm) => {
            this.setState({ dm });
        });
    }

    render() {
        const { dm } = this.state;

        return (
            <Muze data={dm}>
                <Canvas
                    rows={["Country/Region"]}
                    columns={["Confirmed"]}
                    operation={operationFn}
                    title="Coronavirus Cases By Country"
                    xAxis={axes}
                >
                    <Layer mark="bar" />
                    <Layer mark="text" encoding={text} />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

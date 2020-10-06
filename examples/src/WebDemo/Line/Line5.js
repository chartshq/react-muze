import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Encoding, Axes, Legend, Border } from "@chartshq/react-muze/configurations";

const numberFormat = new Intl.NumberFormat();
const axis = Axes.config().tickFormat((value) => numberFormat.format(value)).create();
const leg = Legend.config().show(false).create();
const border = Border.config().create({
    showValueBorders: {
        left: false,
        bottom: false
    }
});

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
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const operationFn = (dm) => {
    return dm = dm.select({
        field: 'Country/Region',
        value: ['US', 'India', 'Brazil'],
        operator: Muze.DataModel.ComparisonOperators.IN
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
        const text1 = Encoding.Text.config().create({
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
                <Canvas border={border} colorLegend={leg} yAxis={axis} rows={['Confirmed']} columns={['Date']} color='Country/Region' operation={operationFn}>
                    <Layer mark="line" />
                    <Layer mark="text" encoding={text1} source={lineSource} />
                </Canvas>
            </Muze>
        );
    }
}

export default Line;

import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { Encoding, Axes } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const arcEncoding = Encoding.Arc.config().radius('No. of cars').angle('Maker').create();

const operationFn = (dm) => {
    return dm.calculateVariable({
        name: 'No. of cars',
        type: 'measure',
        defAggFn: 'count',
        format: val => parseInt(val, 10)
    }, ['Name'], () => 1);
}

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
                <Canvas rows={[]} columns={[]} color="Cylinders" operation={operationFn} title="Radial Pie Chart" subtitle='Number of cars listed in dataset is represented as varying radius per maker per cylinder'>
                    <Layer mark="arc" encoding={arcEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

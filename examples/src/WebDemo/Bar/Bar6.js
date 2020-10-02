import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { share, Encoding } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const operationFn = (dm) => {
    let dm1 = dm.calculateVariable({
        name: 'Min Weight',
        type: 'measure',
        defAggFn: 'min'
    }, ['Weight_in_lbs'], val => val);

    return dm1.calculateVariable({
        name: 'Max Weight',
        type: 'measure',
        defAggFn: 'max'
    }, ['Weight_in_lbs'], val => val);
}

const barEncoding = Encoding.Bar.config()
    .x('Max Weight')
    .x0('Min Weight')
    .y('Year')
    .color({ value: () => '#ff9800' })
    .create();

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
                    rows={["Year"]}
                    columns={[share("Max Weight", "Min Weight")]}
                    operation={operationFn}
                >
                    <Layer mark="bar" encoding={barEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
// import { Encoding } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class LayerDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
        };
    }

    componentDidMount() {
        createDataModel().then((carsDm) => this.setState({ carsDm }));
    }

    render() {
        const { carsDm } = this.state;

        return (
            <>
                <Muze data={carsDm}>
                    <Canvas
                        rows={["Acceleration"]}
                        columns={["Year"]}
                    >
                        <Layer mark="line" />
                        <Layer mark="bar" />
                    </Canvas>
                </Muze>
            </>
        );
    }
}

export default LayerDemo;

import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Encoding } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const arcEncoding = Encoding.Arc.config().angle('Displacement').create();

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
                <Canvas rows={[]} columns={[]} color="Cylinders">
                    <Layer mark="arc" encoding={arcEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

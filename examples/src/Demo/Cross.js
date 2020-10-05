import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
// import { Encoding } from '@chartshq/react-muze/configurations';

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class Cross extends React.Component {
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
            <Muze data={carsDm}>
                <h2>Default - Cross Interaction disabled</h2>
                <Canvas rows={['Acceleration']} columns={['Horsepower']} color="Origin" detail={["Name"]} />
                <Canvas rows={['Acceleration']} columns={['Year']} color="Origin" />
                <Canvas rows={['Acceleration']} columns={['Year']} color="Origin" />
            </Muze>
        );
    }
}

export default Cross;

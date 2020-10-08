import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class CanvasInteractive extends React.Component {
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
                <Canvas rows={['Miles_per_Gallon']} columns={['Cylinders']} crossInteractive />
                <Canvas rows={['Miles_per_Gallon']} columns={['Origin']} />
                <Canvas rows={['Acceleration']} columns={['Cylinders']} crossInteractive />
            </Muze>
        );
    }
}

export default CanvasInteractive;

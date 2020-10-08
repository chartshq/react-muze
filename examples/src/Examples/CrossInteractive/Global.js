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

class MuzeInteractive extends React.Component {
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
            <Muze data={dm} crossInteractive>
                <Canvas rows={['Miles_per_Gallon']} columns={['Cylinders']} />
                <Canvas rows={['Horsepower']} columns={['Cylinders']} />
                <Canvas rows={['Acceleration']} columns={['Cylinders']} />
            </Muze>
        );
    }
}

export default MuzeInteractive;

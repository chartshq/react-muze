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

        console.log(carsDm && carsDm.getData());

        return (
            <Muze data={carsDm}>
                <Canvas
                    rows={['Acceleration', 'Horsepower', 'Miles_per_Gallon']}
                    columns={['Miles_per_Gallon', 'Horsepower', 'Acceleration']}
                    detail={['Name']}
                    color="Cylinders"
                />
            </Muze>
        );
    }
}

export default Bar;

import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

async function createDataModel1() {
    const data = await fetch("/data/movies.json")
        .then((d) => d.json());
    const schema = await fetch("/data/movies-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
            dm: null
        };
    }

    componentDidMount() {
        Promise.all([createDataModel(), createDataModel1()]).then(([carsDm, dm]) => {
            this.setState({ carsDm, dm });
        });
    }

    render() {
        const { carsDm, dm } = this.state;

        return (
            <div id="muze-charts">
                <Muze data={carsDm}>
                    <Canvas
                        rows={["Acceleration"]}
                        columns={["Cylinders"]}
                        color="Origin"
                    />
                    <p>Hello world</p>
                    <Canvas
                        rows={["Acceleration"]}
                        columns={["Cylinders"]}
                        color="Origin"
                    />
                    <Muze data={dm}>
                        <Canvas
                            rows={["Revenue (Millions)"]}
                            columns={["Year"]}
                        />
                    </Muze>
                </Muze>
            </div>
        );
    }
}

export default Basic;

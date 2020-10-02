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
            <Muze data={carsDm} crossInteractive>
                <table id="dashboard">
                    <tbody>
                        <tr>
                            <td>
                                <Canvas
                                    title="this is title"
                                    rows={["Acceleration"]}
                                    columns={["Origin"]}
                                    color="Origin"
                                />
                            </td>
                            <td>
                                <Canvas
                                    title="this is title"
                                    rows={["Acceleration"]}
                                    columns={["Cylinders"]}
                                    color="Origin"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Muze data={carsDm}>
                                    <Canvas
                                        title="this is title"
                                        rows={["Acceleration"]}
                                        columns={["Year"]}
                                        color="Origin"
                                    />
                                    <Canvas
                                        title="this is title"
                                        rows={["Acceleration"]}
                                        columns={["Year"]}
                                        color="Origin"
                                    />
                                </Muze>
                            </td>
                            <td>
                                <Canvas
                                    title="this is title"
                                    rows={["Acceleration"]}
                                    columns={["Year"]}
                                    color="Origin"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Muze>

        );
    }
}

export default Basic;

import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";

async function createDataModel() {
    const data = await fetch("/data/cars-with-null.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class ConnectNullDataChart extends React.Component {
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
                <Canvas rows={['Acceleration']} columns={['Year']} color="Origin">
                    <Layer mark='line' />
                </Canvas>
                <Canvas rows={['Acceleration']} columns={['Year']} color="Origin">
                    <Layer mark='line' connectNullData />
                </Canvas>
            </Muze>
        );
    }
}

export default ConnectNullDataChart;

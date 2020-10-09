import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Encoding } from '@chartshq/react-muze/configurations';

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

//Creating a line encoding from Encoding helper
const lineEncoding = Encoding.Bar.config()
    .color({
        value: () => 'red',
    })
    .create();

class BarLineLayer extends React.Component {
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
                <Canvas rows={['Acceleration']} columns={['Year']}>
                    <Layer mark="bar" />
                    <Layer mark="line" encoding={lineEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default BarLineLayer;

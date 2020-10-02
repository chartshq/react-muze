import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { Headers } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/school.csv")
        .then((d) => d.text());
    const schema = await fetch("/data/school-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class Bar extends React.Component {
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
        const title = Headers.config().content('Primary Schools in Singapore').create();
        const subtitle = Headers.config().content('Type and Zone colored by Gender').create();

        return (
            <Muze data={dm}>
                <Canvas rows={["Area"]} columns={["Zone"]} color="GenderMix" title={title} subtitle={subtitle}>
                    <Layer mark="arc" />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

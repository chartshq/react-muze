import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Headers, POSITION, ALIGNMENT } from '@chartshq/react-muze/configurations';

const { html } = Muze.Operators;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

//Create a title configuration
const title = Headers.config()
    .content(html`<i>I am</i> title`)
    .position(POSITION.TOP)
    .align(ALIGNMENT.RIGHT)
    .create();

class TitleHTML extends React.Component {
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
                <Canvas
                    rows={['Acceleration']}
                    columns={['Origin']}
                    title={title}
                    subtitle="Acceleration vs Origin"
                />
                <Canvas rows={['Acceleration']} columns={['Year']} />
            </Muze>
        );
    }
}

export default TitleHTML;

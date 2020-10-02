import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { Axes, Headers } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/health-index.csv")
        .then((d) => d.text());
    const schema = await fetch("/data/health-index-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num);
}

const axis = Axes.config().name('Axes').create();
const title = Headers.config().content('Health Index of each country over years').create();

class Crosstab extends React.Component {
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

        return (
            <Muze data={carsDm}>
                <Canvas
                    rows={["country", "value"]}
                    columns={['year']}
                    title={title}
                    yAxis={axis}
                />
            </Muze>
        );
    }
}

export default Crosstab;
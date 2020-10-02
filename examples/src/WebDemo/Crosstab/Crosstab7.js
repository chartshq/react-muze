import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";
import { Headers, Color } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/crosstab-heatmap.csv")
        .then((d) => d.text());
    const schema = await fetch("/data/crosstab-heatmap-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

function operationFn(dm) {
    return dm = dm.calculateVariable({
        name: "count of rows",
        type: "measure"
    }, [], () => 1);
}

const title = Headers.config().content('Number of green rated buildings by program, building use & zip code').create();
const subtitle = Headers.config().content('Building use, program, colored by count of rows').create();
const color = Color.config().field('count of rows').step(true).create();

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
                    color={color}
                    rows={["Zip Code", "Building Use"]}
                    columns={["Program"]}
                    title={title}
                    subtitle={subtitle}
                    operation={operationFn}
                />
            </Muze>
        );
    }
}

export default Crosstab;
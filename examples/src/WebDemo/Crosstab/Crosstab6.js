import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { Axes, Headers, Legend } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/by-election.json")
        .then((d) => d.json());
    const schema = await fetch("/data/by-election-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

function operationFn(dm) {
    let dm1 = dm.calculateVariable(
        {
            name: "Binned_Year",
            type: "dimension",
            displayName: 'Year'
        },
        ["Date"],
        (date) => {
            const years = new Date(date).getFullYear();
            const start = Math.ceil(+years / 10) * 10;
            return `${start - 9}-${start}`;
        }
    );
    dm1 = dm1.calculateVariable(
        {
            name: "Binned_Year_axis",
            type: "dimension"
        },
        ["Binned_Year"],
        () => 1
    );
    dm1 = dm1.calculateVariable(
        {
            name: "counter",
            type: "measure",
            defAggFn: "sum",
            displayName: 'Count'
        },
        ["No."],
        (no) => (no ? 1 : null)
    );
    return dm1.sort([["Binned_Year"], ["Reason for Vacancy"]]);
}

const yaxis = Axes.config().show(false).padding(0.1).create();
const title = Headers.config().content('Politicians used to die in office — now they just resign').create();
const subtitle = Headers.config().content("Uses data operators with layout variations to achieve tabular view").create();
const legend = Legend.config().show(false).create();
const color = Color.config().field("Reason for Vacancy").range([
    "rgb(92, 123, 142)",
    "rgb(144, 175, 196)",
    "rgb(199, 231, 253)",
    "rgb(55, 86, 104)",
    "rgb(185, 217, 238)"
]).create();

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
                    yAxis={yaxis}
                    colorLegend={legend}
                    rows={["Binned_Year", "Binned_Year_axis"]}
                    columns={["Reason for Vacancy", "counter"]}
                    title={title}
                    subtitle={subtitle}
                    operation={operationFn}
                    height={550}
                >
                    <Layer mark="bar" />
                    <Layer mark="text" />
                </Canvas>
            </Muze>
        );
    }
}

export default Crosstab;
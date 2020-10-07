import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Axes } from "@chartshq/react-muze/configurations";

const axis = Axes.LinearAxis.config()
    .tickFormat((val) => numberFormatter(val))
    .numberOfTicks(8)
    .create();

function numberFormatter(number) {
    const tier = Math.log10(number) / 3 | 0;

    if (tier == 0) return number;
    const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    // scale the number
    const scaled = number / scale;
    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

async function createDataModel() {
    const data = await fetch("/data/statewise-testing-in.json")
        .then((d) => d.json());
    const schema = [
        {
            name: 'month',
            type: 'dimension',
            displayName: 'Month'
        },
        {
            name: 'value',
            type: 'measure',
            displayName: 'Total tests done',
            format: numberFormatter
        },
        {
            name: 'state',
            type: 'dimension',
            displayName: 'State'
        }
    ];
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
const sortFn = (a, b) => months.indexOf(a) - months.indexOf(b);

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

        return (
            <Muze data={carsDm}>
                <Canvas
                    columns={["month"]}
                    rows={["value"]}
                    color="state"
                    yAxis={axis}
                    title="Coronavirus tests done by states"
                    subtitle='From April - August'
                    sort={{
                        month: sortFn
                    }}
                >
                    <Layer mark="bar" transformType="group" />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

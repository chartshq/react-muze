import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Axes } from "@chartshq/react-muze/configurations";

const share = Muze.Operators.share;
const DataModel = Muze.DataModel;
const composeLayers = Layer.Operators.compose;

async function createDataModel() {
    const data = await fetch("/data/iris-cleared-data.json")
        .then((d) => d.json());
    var schema = [
        {
            name: "organ",
            type: "dimension"
        },
        {
            name: "minValue",
            type: "measure"
        },
        {
            name: "meanValue",
            type: "measure"
        },
        {
            name: "maxValue",
            type: "measure"
        },
        {
            name: "quarter",
            type: "measure"
        },
        {
            name: "thirdQuarter",
            type: "measure"
        }
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

var layers = [
    {
        name: "maxTick",
        mark: "tick",
        className: "boxTicks",
        encoding: {
            y: "boxMark.encoding.maxValue",
            x: "boxMark.encoding.x"
        },
        interactive: false
    },
    {
        name: "upperTick",
        className: "upper-tick",
        mark: "tick",
        encoding: {
            y: "boxMark.encoding.quarter",
            x: "boxMark.encoding.x",
            y0: "boxMark.encoding.minValue"
        },
        interactive: false
    },
    {
        name: "upperBand",
        mark: "bar",
        className: "upperBand",
        encoding: {
            y: "boxMark.encoding.thirdQuarter",
            x: "boxMark.encoding.x",
            y0: "boxMark.encoding.meanValue",
            color: "boxMark.encoding.color"
        },
        transform: {
            type: "identity"
        }
    },
    {
        name: "meanTick",
        mark: "tick",
        className: "boxTicks",
        encoding: {
            y: "boxMark.encoding.meanValue",
            x: "boxMark.encoding.x"
        },
        interactive: false
    },
    {
        name: "lowerBand",
        mark: "bar",
        className: "lowerBand",
        encoding: {
            y0: "boxMark.encoding.meanValue",
            x: "boxMark.encoding.x",
            y: "boxMark.encoding.quarter",
            color: "boxMark.encoding.color"
        },
        transform: {
            type: "identity"
        }
    },
    {
        name: "lowerTick",
        mark: "tick",
        className: "boxTicks",
        encoding: {
            y: "boxMark.encoding.maxValue",
            x: "boxMark.encoding.x",
            y0: "boxMark.encoding.thirdQuarter"
        },
        interactive: false
    },
    {
        name: "minTick",
        mark: "tick",
        className: "boxTicks",
        encoding: {
            y: "boxMark.encoding.minValue",
            x: "boxMark.encoding.x"
        },
        interactive: false
    }
];
composeLayers("boxMark", layers);

var sharedField = void 0;
// Create a combined field which gets plotted in the Y-axis. Value of all those variables will be passed
// to layers
var columns = [
    (sharedField = share(
        "minValue",
        "meanValue",
        "maxValue",
        "quarter",
        "thirdQuarter"
    ))
];
var rows = ["organ"];

const encoding = {
    // Map the encoding with variables. These custom encodings are used in the composite layers.
    minValue: "minValue",
    meanValue: "meanValue",
    x: "organ",
    maxValue: "maxValue",
    quarter: "quarter",
    thirdQuarter: "thirdQuarter"
};
const axis = Axes.config().create({
    showAxisName: true,
    name: "Measure"
});

class RangeArea extends React.Component {
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
                    yAxis={axis}
                    rows={columns}
                    columns={rows}
                    color="organ"
                >
                    <Layer mark="boxMark" encoding={encoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default RangeArea;

import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";
import { Color, Axes } from "@chartshq/react-muze/configurations";

import jsonData from "./statewise-testing-in.json";

import "./index.css";

const schema = [
  {
    name: "month",
    type: "dimension",
    displayName: "Month",
  },
  {
    name: "value",
    type: "measure",
    displayName: "Total tests done",
    format: numberFormatter,
  },
  {
    name: "state",
    type: "dimension",
    displayName: "State",
  },
];

async function createDataModel() {
  const data = jsonData;
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class DarkThemeWithGrid extends React.Component {
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

    const color = Color.config()
      .field("state")
      .range(["pink", "orange", "red", "mauvish", "yellow"])
      .create();

    const yAxis = Axes.config()
      .tickFormat((v) => numberFormatter(v))
      .numberOfTicks(8)
      .create();

    // NOTE: this configuration requires a sort prop to be passed
    // but our API for react-muze doesn't support it like in demo
    // sort: {
    //   month: (a, b) => months.indexOf(a) - months.indexOf(b)
    // }

    // NOTE: teh demo mounts the chart on `#chart`, we are only
    // supporting className, we need a id field too

    return (
      <div id="chart-container">
        <Muze data={carsDm}>
          <Canvas
            title="Coronavirus tests done by states"
            subtitle="From April - August"
            className="chart"
            rows={["value"]}
            columns={["month"]}
            color={color}
            yAxis={yAxis}
          >
            <Layer type="bar" transformType="group" />
          </Canvas>
        </Muze>
      </div>
    );
  }
}

export default DarkThemeWithGrid;

const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

function numberFormatter(number) {
  const tier = (Math.log10(number) / 3) | 0;

  if (tier == 0) return number;

  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  // scale the number
  const scaled = number / scale;
  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}

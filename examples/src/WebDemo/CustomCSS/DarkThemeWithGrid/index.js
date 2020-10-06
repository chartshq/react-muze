import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Color, Axes, Headers } from "@chartshq/react-muze/configurations";
import "./index.css";

const { DataModel } = Muze;

async function createDataModel() {
  const data = await fetch("/data/statewise-testing-in.json").then((d) => d.json());
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
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class DarkThemeWithGrid extends React.Component {
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

    const color = Color.config()
      .field("state")
      .range(["pink", "orange", "red", "mauvish", "yellow"])
      .create();

    const yAxis = Axes.config()
      .tickFormat((v) => numberFormatter(v))
      .numberOfTicks(8)
      .create();

    const title = Headers.config()
      .content("Coronavirus tests done by states")
      .className('dark-theme-title')
      .create();

    // NOTE: this configuration requires a sort prop to be passed
    // but our API for react-muze doesn't support it like in demo
    // sort: {
    //   month: (a, b) => months.indexOf(a) - months.indexOf(b)
    // }

    // NOTE: teh demo mounts the chart on `#chart`, we are only
    // supporting className, we need a id field too

    return (
      <Muze data={dm}>
        <Canvas
          title={title}
          subtitle="From April - August"
          className="dark-theme-chart"
          rows={["value"]}
          columns={["month"]}
          color={color}
          yAxis={yAxis}
        >
          <Layer type="bar" transformType="group" />
        </Canvas>
      </Muze>
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

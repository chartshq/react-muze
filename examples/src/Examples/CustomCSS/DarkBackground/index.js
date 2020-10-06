import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import {
  Color,
  Border,
  Encoding,
  Axes,
  Headers
} from "@chartshq/react-muze/configurations";
import "./index.css";

const { DataModel } = Muze;

async function createDataModel() {
  const data = await fetch("/data/supermarket.csv").then((d) => d.text());
  let schema = await fetch("/data/supermarket-schema.json").then((d) => d.json());
  schema = schema.map((s) => {
    if (s.name === "Total") {
      return Object.assign(s, {
        format: (val) =>
          `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      });
    }
    return s;
  });
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class DarkThemeWithGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dm: null
    };
  }

  componentDidMount() {
    createDataModel().then((dm) => {
      this.setState({ dm });
    });
  }

  render() {
    const { dm } = this.state;

    const title = Headers.config().content("Supermarket Sales").create();
    const color = Color.config()
      .field("City")
      .range(["#35B5D8", "#F2726F", "#FFC534"])
      .create();
    const arcEncoding = Encoding.Arc.config().angle("Total").create();
    const border = Border.config().style("transparent").create();
    const radius = Axes.Radius.config().range(r => [r[0], r[1] - 10]).create();

    return (
      <Muze data={dm}>
        <Canvas
          title={title}
          subtitle="Total amount spent for each payment methods"
          className="dark-background-chart"
          rows={["Payment"]}
          columns={[]}
          color={color}
          border={border}
          axesRadius={radius}
        >
          <Layer mark="arc" encoding={arcEncoding} />
        </Canvas>
      </Muze>
    );
  }
}

export default DarkThemeWithGrid;

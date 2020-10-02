import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";
import {
  Color,
  Border,
  Encoding,
  Axes,
} from "@chartshq/react-muze/configurations";

import "./index.css";

import csvData from "./supermarket.csv";
import jsonSchema from "./supermarket-schema.json";

async function createDataModel() {
  const data = csvData;
  const schema = jsonSchema.map((s) => {
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
      .field("City")
      .range(["#35B5D8", "#F2726F", "#FFC534"])
      .create();

    const arcEncoding = Encoding.Arc.config().angle("Total").create();

    const border = Border.config().style("transparent").create();

    // NOTE: there's no solution for
    // axes: {
    //   radius: {
    //     range: range => [range[0], range[1] - 10]
    //   }
    // }

    return (
      <div id="chart-container">
        <Muze data={carsDm}>
          <Canvas
            title="Supermarket Sales"
            subtitle="Total amount spent for each payment methods"
            className="chart"
            rows={["Payment"]}
            columns={[]}
            color={color}
            border={border}
          >
            <Layer type="mark" encoding={arcEncoding} />
          </Canvas>
        </Muze>
      </div>
    );
  }
}

export default DarkThemeWithGrid;

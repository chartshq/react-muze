import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";
import { Encoding } from "@chartshq/react-muze/configurations";

import "./index.css";

async function createDataModel() {
  const data = await fetch("/data/cars.json").then((d) => d.json());
  const schema = await fetch("/data/cars-schema.json").then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class BackgroundImageTheme extends React.Component {
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

    const barEncoding = Encoding.Bar.config().color("#818180").create();

    // NOTE: throwing the following error
    // Uncaught TypeError: Cannot read property 'largestTickDimensions' of undefined

    return (
      <div id="chart-container">
        <Muze data={carsDm}>
          <Canvas
            className="chart"
            rows={["Acceleration"]}
            columns={["Year"]}
            title={"Average of Acceleration over the years"}
            subtitle={"For years 1970-1982"}
          >
            <Layer type="bar" encoding={barEncoding} />
          </Canvas>
        </Muze>
      </div>
    );
  }
}

export default BackgroundImageTheme;

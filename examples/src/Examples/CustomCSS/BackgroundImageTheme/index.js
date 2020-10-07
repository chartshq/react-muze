import * as React from "react";
import Muze, {
  Canvas,
  Layer
} from "@chartshq/react-muze/components";
import "./index.css";

const { DataModel } = Muze;

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

    return (
      <Muze data={carsDm}>
        <Canvas
          className="muze-chart-1"
          rows={["Acceleration"]}
          columns={["Year"]}
          title={"Average of Acceleration over the years"}
          subtitle={"For years 1970-1982"}
        >
          <Layer mark="bar" />
        </Canvas>
      </Muze>
    );
  }
}

export default BackgroundImageTheme;

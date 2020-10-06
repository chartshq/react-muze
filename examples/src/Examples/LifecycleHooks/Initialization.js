import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";

async function createDataModel() {
  const data = await fetch("/data/cars.json").then((d) => d.json());
  const schema = await fetch("/data/cars-schema.json").then((d) => d.json());
  const DataModelClass = await Muze.DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class Initialization extends React.Component {
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
          rows={["Horsepower"]}
          columns={["Year"]}
          onInitialized={(canvas) => {
            canvas.client.config({
              border: {
                style: "solid",
                color: "red",
                width: 2,
              },
            });
          }}
        >
          <Layer mark="area" />
        </Canvas>
      </Muze>
    );
  }
}

export default Initialization;

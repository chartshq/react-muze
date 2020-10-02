import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";

async function createDataModel() {
  const data = await fetch("/data/cars.json").then((d) => d.json());
  const schema = await fetch("/data/cars-schema.json").then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class TooltipStyling extends React.Component {
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

    const title = Headers.config().position("bottom").align("right").create();
    const subtitle = Headers.config()
      .position("bottom")
      .align("right")
      .create();

    return (
      <Muze data={carsDm}>
        <Canvas
          title={title}
          subtitle={subtitle}
          rows={["Horsepower"]}
          columns={["Origin"]}
          color="Cylinders"
        >
          <Layer type="mark" transformType="group" />
        </Canvas>
      </Muze>
    );
  }
}

export default TooltipStyling;

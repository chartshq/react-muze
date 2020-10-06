import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";
import { Tooltip } from "@chartshq/react-muze/configurations";

async function createDataModel() {
  const data = await fetch("/data/cars.json").then((d) => d.json());
  const schema = await fetch("/data/cars-schema.json").then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class CustomTooltip extends React.Component {
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

    const tooltip = Tooltip.config().on("highlight").mode("fragmented");

    return (
      <Muze data={carsDm}>
        <Canvas
          rows={["Horsepower"]}
          columns={["Origin"]}
          color="Cylinders"
          tooltips={[tooltip]}
        >
          <Layer type="bar" transformType="stack" />
        </Canvas>
      </Muze>
    );
  }
}

export default CustomTooltip;

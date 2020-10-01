import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";

const DATA_SRC =
  "https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars.json";
const SCHEMA_SRC =
  "https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars-schema.json";

async function createDataModel() {
  const data = await fetch(DATA_SRC).then((d) => d.json());
  const schema = await fetch(SCHEMA_SRC).then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carsDm: null,
    };
  }

  componentDidMount() {
    createDataModel().then((carsDm) => this.setState({ carsDm }));
  }

  render() {
    const { carsDm } = this.state;

    return (
      <div>
        {carsDm && (
          <Muze data={carsDm}>
            <Canvas
              rows={["Acceleration"]}
              columns={["Horsepower"]}
              color="Origin"
            />
          </Muze>
        )}
      </div>
    );
  }
}

export default Simple;

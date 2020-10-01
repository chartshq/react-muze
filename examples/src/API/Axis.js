import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";
import { Axes } from "@chartshq/react-muze/configurations";

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

    const xAxis = Axes.config().create({
      name: "X Axissss",
      showAxisName: true,
      tickFormat: (val) => `#${val}`,
    });

    const yAxis = Axes.config().create({
      name: "Y Axissss",
      showAxisName: false,
      tickFormat: (val) => `#${val}`,
    });

    return (
      <div>
        {carsDm && (
          <Muze data={carsDm}>
            <Canvas
              rows={["Acceleration"]}
              columns={["Year"]}
              xAxis={xAxis}
              yAxis={yAxis}
            />
          </Muze>
        )}
      </div>
    );
  }
}

export default Simple;

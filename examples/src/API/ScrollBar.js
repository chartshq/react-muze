import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";
import { ScrollBar } from "@chartshq/react-muze/configurations";
import {
  SCROLL_HORIZONTAL,
  SCROLL_VERTICAL,
} from "@chartshq/react-muze/constants";

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

    const scrollbar = ScrollBar.config()
      .verticalAlign(SCROLL_VERTICAL.LEFT)
      .horizontalAlign(SCROLL_HORIZONTAL.TOP)
      .thickness(10)
      .verticalAlign(2)
      .create();

    return (
      <div>
        {carsDm && (
          <Muze data={carsDm}>
            <Canvas
              rows={["Acceleration"]}
              columns={["Year"]}
              scrollbar={scrollbar}
            />
          </Muze>
        )}
      </div>
    );
  }
}

export default Simple;

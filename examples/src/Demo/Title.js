import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import {
  Headers,
  html,
  POSITION,
  ALIGNMENT,
  Tooltip,
} from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

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

class Title extends React.Component {
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
    const title = Headers.config()
      .content(html`<i>I am</i> title`)
      .position(POSITION.TOP)
      .align(ALIGNMENT.RIGHT)
      .create();

    const { carsDm } = this.state;

    return (
      <>
        <Muze data={carsDm}>
          <Canvas
            title="this is title"
            subtitle={title}
            rows={["Acceleration"]}
            columns={["Origin"]}
            color="Origin"
          />
          <Canvas
            title="this is title"
            subtitle={title}
            rows={["Acceleration"]}
            columns={["Origin"]}
            color="Origin"
          />
        </Muze>
        <Muze data={carsDm}>
          <Canvas
            title="this is title"
            subtitle={title}
            rows={["Acceleration"]}
            columns={["Origin"]}
            color="Origin"
          />
        </Muze>
      </>
    );
  }
}

export default Title;

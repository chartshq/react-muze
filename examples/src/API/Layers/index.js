import * as React from "react";
import Muze, {
  Canvas,
  Layer
} from "@chartshq/react-muze/components";
import { Axes, Encoding } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

const DATA_SRC =
  "https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars.json";
const SCHEMA_SRC =
  "https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars-schema.json";

async function createDataModel() {
  const data = await fetch("/data/movies.json").then((d) => d.json());
  const schema = await fetch("/data/movies-schema.json").then((d) => d.json());
  // const data = await fetch(DATA_SRC).then((d) => d.json());
  // const schema = await fetch(SCHEMA_SRC).then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesDm: null,
    };
  }

  componentDidMount() {
    createDataModel().then((moviesDm) => this.setState({ moviesDm }));
  }

  render() {
    const { moviesDm } = this.state;

    const lineEncoding = Encoding.Line.config()
      .color({
        value: () => "green",
      })
      .x("Genre")
      .y("Rating")
      .create();

    const barEncoding = Encoding.Bar.config()
      .x("Genre")
      .y("Revenue (Millions)")
      .create();

    return (
      <div>
        {moviesDm && (
          <Muze data={moviesDm}>
            <Canvas
              rows={[["Rating"], ["Revenue (Millions)"]]}
              columns={["Genre"]}
            >
              <Layer mark="line" encoding={lineEncoding} />
              <Layer mark="bar" encoding={barEncoding} />
            </Canvas>
          </Muze>
        )}
      </div>
    );
  }
}

export default Simple;

import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";
import {
  Headers,
  html,
  POSITION,
  ALIGNMENT,
  Tooltip,
} from "@chartshq/react-muze/configurations";
import { TOOLTIP_TYPE, TOOLTIP_MODE } from "@chartshq/react-muze/constants";

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
      .html(html`<i>I am</i> title`)
      .position(POSITION.TOP)
      .align(ALIGNMENT.RIGHT)
      .create();

    // console.log('title', title);

    // const title = Headers.config()
    //   .create({
    //     content: html`<i>I am</i> title`,
    //     position: POSITION.BOTTOM,
    //     align: ALIGNMENT.RIGHT
    //   });

    const tooltip = Tooltip.config()
      .on(TOOLTIP_TYPE.HIGHLIGHT)
      .mode(TOOLTIP_MODE.FRAGMENTED)
      .formatter((dataStore, config, context) => {
        return html`<p>Hello world</p>`;
      })
      .create();

    const { carsDm } = this.state;

    return (
      <div>
        {carsDm && (
          <Muze data={carsDm}>
            <Canvas
              title={title}
              subtitle="Hello world"
              rows={["Acceleration"]}
              columns={["Origin"]}
              color="Origin"
              tooltips={[tooltip]}
            />
          </Muze>
        )}
      </div>
    );
  }
}

export default Title;

import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";
import { Border } from "@chartshq/react-muze/configurations";
import { MuzeConstants } from "@chartshq/react-muze/constants";

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

    const border = Border.config()
      .onRows({
        top: true,
        bottom: true,
        left: true,
        right: true,
      })
      .onColumns({
        top: true,
        bottom: true,
        left: true,
        right: true,
      })
      .onValues({
        top: true,
        bottom: true,
        left: true,
        right: true,
      })
      .width(1)
      .style(MuzeConstants.BORDER_STYLE.DASHED)
      .color("#a2a2a2");

    return (
      <div style={{ display: "inline-block", float: "left", padding: 30 }}>
        {carsDm && (
          <Muze data={carsDm}>
            <Muze data={carsDm}>
              <Canvas
                rows={["Maker", "Cylinders"]}
                columns={[
                  ["Acceleration", "Horsepower"],
                  ["Acceleration", "Horsepower"],
                ]}
                color="Origin"
                showHeaders={true}
                border={border}
              />
            </Muze>
          </Muze>
        )}
      </div>
    );
  }
}

export default Simple;

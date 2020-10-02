import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";
import { Encoding } from "@chartshq/react-muze/configurations";

import "./index.css";

import data from "./state-school.json";
import schema from "./state-school-schema.json";

async function createDataModel() {
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class BackgroundImageTheme extends React.Component {
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

    // NOTE: throwing the following error, where
    // rows={["Primary_Total", "Higher_Secondary_Total"]}
    // Uncaught TypeError: Cannot read property 'width' of undefined

    return (
      <div id="chart-container">
        <Muze data={carsDm}>
          <Canvas
            className="chart"
            rows={["Primary_Total"]}
            columns={["State_UT"]}
            color={"Year"}
            title={
              "Average enrollment in primary and secondary schools by states"
            }
            subtitle={"For 2013 and 2015"}
          />
        </Muze>
      </div>
    );
  }
}

export default BackgroundImageTheme;

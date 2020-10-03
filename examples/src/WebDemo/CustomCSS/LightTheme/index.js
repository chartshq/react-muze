import * as React from "react";
import Muze, { Canvas, DataModel } from "@chartshq/react-muze/components";
import { Headers } from "@chartshq/react-muze/configurations";
import "./index.css";

async function createDataModel() {
  const data = await fetch("/data/state-school.json").then((d) => d.json());
  const schema = await fetch("/data/state-school-schema.json").then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class BackgroundImageTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dm: null,
    };
  }

  componentDidMount() {
    createDataModel().then((dm) => {
      this.setState({ dm });
    });
  }

  render() {
    const { dm } = this.state;
    const title = Headers.config()
      .content("Average enrollment in primary and secondary schools by states")
      .className('school-muze-chart-title').create();

    return (
      <Muze data={dm}>
        <Canvas
          className="school-muze-chart"
          rows={["Primary_Total", "Higher_Secondary_Total"]}
          columns={["State_UT"]}
          color={"Year"}
          title={title}
          subtitle={"For 2013 and 2015"}
        />
      </Muze>
    );
  }
}

export default BackgroundImageTheme;

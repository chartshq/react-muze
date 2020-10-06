import * as React from "react";
import Muze, {
  Canvas,
  Layer,
  DataModel,
} from "@chartshq/react-muze/components";
import { Tooltip, html } from "@chartshq/react-muze/configurations";

async function createDataModel() {
  const data = await fetch("/data/cars.json").then((d) => d.json());
  const schema = await fetch("/data/cars-schema.json").then((d) => d.json());
  const DataModelClass = await DataModel.onReady();
  const formattedData = await DataModelClass.loadData(data, schema);
  return new DataModelClass(formattedData);
}

class FragmentedTooltip extends React.Component {
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

    const tooltip = Tooltip.config().formatter((dataStore, config, context) => {
      const colorAxis = context.axes.color[0];
      const tooltipData = dataStore.getData().data;

      let tooltipContent = "";
      tooltipData.forEach((dataArray, i) => {
        const originVal = dataArray[dataStore.getFieldIndex("Origin")];
        const hpVal = dataArray[dataStore.getFieldIndex("Horsepower")];
        const cylVal = dataArray[dataStore.getFieldIndex("Cylinders")];
        const l = colorAxis.getRawColor(cylVal)[2]; // luminance
        tooltipContent += `
${i ? "" : `<h3 style="background-color:#EAEAEA">Country: ${originVal}</h3>`}
<div style="background: ${colorAxis.getColor(
          cylVal
        )}; padding: 4px 8px; color: ${l > 0.45 ? "black" : "white"};">
<u>${cylVal} Cylinders</u> cars with an average power of <b>${hpVal} HP</b>
</div>
`;
        tooltipContent += "<br>";
      });
      return html`${tooltipContent}`;
    });

    // NOTE: in the demo (react) tooltip is not fragmented

    // the input that is getting passed to muze is (core muze bug)
    // tooltip: {
    //   highlightSummary: {
    //     mode: "fragmented";
    //   }
    // }

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

export default FragmentedTooltip;

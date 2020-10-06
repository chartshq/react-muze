import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Encoding, Axes, Headers, POSITION, ALIGNMENT, Color } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/sales.csv")
        .then((d) => d.text());
    const schema = [
        {
            name: "Month",
            type: "dimension"
        },
        {
            name: "Name",
            type: "dimension"
        },
        {
            name: "Sales",
            type: "measure",
            format: (val) => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const title = Headers.config().content('Heatmap').position(POSITION.TOP).align(ALIGNMENT.RIGHT).create();
const subtitle = Headers.config().content('Sales per month for each sales person').position(POSITION.TOP).align(ALIGNMENT.RIGHT).create();
const color = Color.config().field('Sales').step(true).range(["#BBF6F0", "#85ECE1", "#50C0B5", "#12877B", "#005F56"]).create();
const axis = Axes.config().padding(0).create();
const textEncoding = Encoding.Text.config().color({
    value: () => "#fff"
}).text({
    field: "Sales",
    formatter: (value) => `${(value / 1000).toFixed(1)}k`
}).create();

class HeatMap extends React.Component {
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

        return (
            <Muze data={carsDm}>
                <Canvas xAxis={axis} yAxis={axis} color={color} title={title} subtitle={subtitle} rows={['Name']} columns={['Month']} width={750} height={450}>
                    <Layer mark="bar" />
                    <Layer mark="text" interactive={false} encoding={textEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default HeatMap;

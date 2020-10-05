import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Axes, Headers, Encoding, Border } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

const border = Border.config().create({
    style: 'transparent'
});

async function createDataModel() {
    const data = await fetch("/data/coffee.csv")
        .then((d) => d.text());
    const schema = [
        {
            "name": "Market",
            "type": "dimension"
        },
        {
            "name": "Product",
            "type": "dimension"
        },
        {
            "name": "Product Type",
            "type": "dimension"
        },
        {
            "name": "Expense",
            "type": "measure"
        },
        {
            "name": "Profit",
            "type": "measure",
            "format": val => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        }
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num);
}

const title = Headers.config().content('Profit of products faceted by Market and Product Type').create();
const arc = Encoding.Arc.config().angle('Profit').create();
const textEncoding = Encoding.Text.config()
    .text({
        field: "Profit",
        formatter: (val) => kFormatter(val)
    })
    .color({
        value: () => 'black'
    })
    .radius({
        value: (d) => d.radius + 15
    })
    .create();

const axisRadius = Axes.Radius.config().range(r => [r[0] + 20, r[1] - 25]).create();

class Crosstab extends React.Component {
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
                <Canvas
                    border={border}
                    rows={["Product Type"]}
                    columns={[['Market'], []]}
                    color="Product"
                    title={title}
                    axesRadius={axisRadius}
                    width={700}
                    height={800}
                >
                    <Layer mark="arc" encoding={arc} />
                    <Layer mark="text" encoding={textEncoding} />
                </Canvas>
            </Muze>
        );
    }
}

export default Crosstab;
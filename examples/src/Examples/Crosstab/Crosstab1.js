import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Axes, GridLines } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/coffee.csv")
        .then((d) => d.text());
    const schema = [
        {
            "name": "Market",
            "type": "dimension"
        },
        {
            "name": "Product Type",
            "type": "dimension"
        },
        {
            "name": "Revenue",
            "type": "measure",
            "format": val => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        },
        {
            "name": "Expense",
            "type": "measure",
            "format": val => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
        },
        {
            "name": "Profit",
            "type": "measure"
        }
    ];
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const axis = Axes.config().tickFormat(val => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`).create();
const grid = GridLines.config().show(false).showVertical(false).showHorizontal(false).create();

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
                <Canvas gridLines={grid} width={600} height={800} xAxis={axis} rows={['Market', 'Product Type']} columns={[['Revenue', 'Expense'], ['Revenue', 'Expense']]} />
            </Muze>
        );
    }
}

export default Crosstab;
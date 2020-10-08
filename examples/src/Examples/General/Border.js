import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Border } from "@chartshq/react-muze/configurations";
import { MuzeConstants } from "@chartshq/react-muze/constants";

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

const border = Border.config()
    .showRowBorders({ top: true, bottom: true, left: true, right: true })
    .showColBorders({ top: true, bottom: true, left: true, right: true })
    .showValueBorders({ top: false, bottom: false, left: false, right: false })
    .width(1)
    .style(MuzeConstants.BORDER_STYLE.DASHED)
    .color("#a2a2a2")
    .create();

class BorderConfig extends React.Component {
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

        return (
            <Muze data={dm}>
                <Canvas
                    rows={['Market', 'Product Type']}
                    columns={[['Revenue', 'Expense'], ['Revenue', 'Expense']]}
                    border={border}
                />
            </Muze>
        );
    }
}

export default BorderConfig;

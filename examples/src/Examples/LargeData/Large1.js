import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Axes, Headers } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/MSFT.csv")
        .then((d) => d.text());
    const schema = [{
        "name": "Date",
        "type": "dimension",
        "subtype": "temporal",
        "format": "%Y-%m-%d"
    },
    {
        "name": "Close",
        "type": "measure",
        "defAggFn": "max",
        "format": val => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    }
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const title = Headers.config().content('MSFT Stocks from 13/3/1986 TO 8/1/2020').create();
const subtitle = Headers.config().content('A line chart with 10,000 data points').create();
const axis = Axes.LinearAxis.config().tickFormat(val => `$${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`).create();

class Large extends React.Component {
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
                    yAxis={axis}
                    title={title}
                    subtitle={subtitle}
                    rows={['Close']}
                    columns={['Date']}
                    width={750}
                    height={450}
                />
            </Muze>
        );
    }
}

export default Large;

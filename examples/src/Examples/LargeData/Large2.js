import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Axes } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("https://charts-web.s3.ap-south-1.amazonaws.com/delhi-weather.json")
        .then((d) => d.json());
    const schema = [
        {
            "name": "datetime_utc",
            "type": "dimension",
            "subtype": "temporal",
            "format": "%Y-%m-%d-%H:%M"
        },
        {
            "name": "hum",
            "type": "measure",
            "defAggFn": "avg",
            "displayName": "Humidity"
        }
    ];
    const DataModelClass = await DataModel.onReady();
    const DateTimeFormatter = DataModelClass.DateTimeFormatter;
    const inst = new DateTimeFormatter("%Y-%m-%d-%H:%M");
    data.forEach(obj => {
        const dateObj = inst.getNativeDate(obj.datetime_utc);
        obj.month = new Date(dateObj.getFullYear(), dateObj.getMonth()).getTime();
    });
    schema.push({
        name: "month",
        type: "dimension",
        subtype: "temporal"
    });
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const axis = Axes.LinearAxis.config().tickFormat(val => `${val}%`).create();

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
                    rows={['hum']}
                    columns={['month']}
                    yAxis={axis}
                    title="Line chart with 100,000 points"
                    subtitle="Average Monthly Humidity of Delhi from Nov 1996 to April 2017 (aggregated by month)"
                >
                    <Layer mark="line" />
                </Canvas>
            </Muze>
        );
    }
}

export default Large;

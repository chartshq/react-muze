import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Axes } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/covid19-complete.csv")
        .then((d) => d.text());
    const schema = [
        {
            "name": "Country/Region",
            "type": "dimension"
        },
        {
            "name": "Province/State",
            "type": "dimension"
        },
        {
            "name": "Deaths",
            "type": "measure"
        },
        {
            "name": "Confirmed",
            "type": "measure"
        },
        {
            "name": "Date",
            "type": "dimension",
            "subtype": "temporal",
            "format": "%Y-%m-%d"
        }
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const axis = Axes.config().nice(false).create();

class Large extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dm: null,
        };
    }

    componentDidMount() {
        createDataModel().then((dm) => {
            let dm1 = dm.select({
                field: 'Country/Region',
                value: ['India', 'US', 'Brazil', 'United Kingdom', 'China'],
                operator: DataModel.ComparisonOperators.IN
            });
            this.setState({ dm: dm1 });
        });
    }

    render() {
        const { dm } = this.state;

        return (
            <Muze data={dm}>
                <Canvas
                    xAxis={axis}
                    title="Coronavirus Cases by Country"
                    rows={["Country/Region", "Confirmed", "Deaths"]}
                    columns={['Date']}
                >
                    <Layer mark="bar" transformType="identity" />
                </Canvas>
            </Muze>
        );
    }
}

export default Large;

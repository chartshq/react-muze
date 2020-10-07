import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Axes } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/statewise-testing-in.json").then((d) => d.json());
    const schema = [{
        name: 'state',
        type: 'dimension',
    }, {
        name: 'value',
        type: 'measure',
    }];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const axis = Axes.LinearAxis.config().show(false).create();

class AxisLabel extends React.Component {
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
                    title="Coronavirus tests done by States"
                    rows={["value"]}
                    columns={["state"]}
                    yAxis={axis}
                    xAxis={axis}
                />
            </Muze>
        );
    }
}

export default AxisLabel;

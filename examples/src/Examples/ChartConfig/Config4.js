import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Axes } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/statewise-testing-in.json").then((d) => d.json());
    const schema = [{
        name: 'state',
        type: 'dimension',
        displayName: 'State'
    }, {
        name: 'value',
        type: 'measure',
        displayName: 'Tests',
        format: numberFormat
    }];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

function numberFormat(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

const axis = Axes.config().tickFormat(numberFormat).name('Number of tests done').create();

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
                />
            </Muze>
        );
    }
}

export default AxisLabel;

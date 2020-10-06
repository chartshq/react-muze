import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Axes, Border } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/covid19-daily.json").then((d) => d.json());
    const schema = [{
        name: 'Date',
        type: 'dimension',
        subtype: 'temporal',
    }, {
        name: 'Cases',
        type: 'measure',
        displayName: 'Total cases',
        format: numberFormat,
        defAggFn: 'avg'
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

const axis = Axes.LinearAxis.config().tickFormat(numberFormat).interpolator('log').numberOfTicks(6).create();

const border = Border.config().create({
    showValueBorders: {
        left: false,
        bottom: false
    }
});

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
                    title="Coronavirus Cases (worldwide)"
                    rows={["Cases"]}
                    columns={["Date"]}
                    yAxis={axis}
                    border={border}
                />
            </Muze>
        );
    }
}

export default AxisLabel;

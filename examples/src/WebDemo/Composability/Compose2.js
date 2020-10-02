import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { share, Encoding, Axes } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const operationFn = dm => {
    let dm1 = dm.calculateVariable({
        name: 'Min Weight',
        type: 'measure',
        defAggFn: 'min'
    }, ['Weight_in_lbs'], val => val);

    return dm1.calculateVariable({
        name: 'Max Weight',
        type: 'measure',
        defAggFn: 'max'
    }, ['Weight_in_lbs'], val => val);
}

const areaEncoding = Encoding.Area.config().y('Max Weight').y0('Min Weight').x('Year').color({ value: () => '#ff9800' }).create();
const axis = Axes.config().name('Weight').create();

class Bar extends React.Component {
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
                    yAxis={axis}
                    rows={[share("Max Weight", "Min Weight")]}
                    columns={["Year"]}
                    operation={operationFn}
                >
                    <Layer mark="area" encoding={areaEncoding} interpolate="catmullRom" />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

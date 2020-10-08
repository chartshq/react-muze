import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { GridLines } from '@chartshq/react-muze/configurations';

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

//we show only the vertical gridlines and use silver color
const gridLine = GridLines
    .config()
    .show(true)
    .showHorizontal(false)
    .color('silver')
    .create();

class GridLinesConfig extends React.Component {
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
                    rows={['Acceleration']}
                    columns={['Origin']}
                    title="First chart"
                    gridLines={gridLine}
                />
            </Muze>
        );
    }
}

export default GridLinesConfig;

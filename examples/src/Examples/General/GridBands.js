import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { GridBands } from '@chartshq/react-muze/configurations';

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const gridBand = GridBands.config().showVertical(true).create();

class GridBandsConfig extends React.Component {
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
                    gridBands={gridBand}
                />
            </Muze>
        );
    }
}

export default GridBandsConfig;

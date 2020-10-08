import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Legend } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const legend = Legend.config().title('Size title title').create();

class SizeLegendChart extends React.Component {
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
                    rows={['Weight_in_lbs']}
                    columns={['Horsepower']}
                    detail={['Name']}
                    size="Miles_per_Gallon"
                    sizeLegend={legend}
                />
            </Muze>
        );
    }
}

export default SizeLegendChart;

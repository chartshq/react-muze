import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Color } from '@chartshq/react-muze/configurations';

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

const color = Color.config().create({
    field: 'Miles_per_Gallon',
    //enabling step in the legend
    step: true
});

class StepLegendChart extends React.Component {
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
                    rows={['Horsepower']}
                    columns={['Weight_in_lbs']}
                    detail={['Name']}
                    color={color}
                />
            </Muze>

        );
    }
}

export default StepLegendChart;

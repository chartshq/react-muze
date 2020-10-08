import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Legend, Color } from '@chartshq/react-muze/configurations';

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

const colorLeg = Legend.config()
    .create({
        textWidth: 10,
        textFormatter: val => {
            return val.join(' to ');
        },
        border: 4,
        borderColor: 'red'
    });

const color = Color.config().create({
    field: 'Miles_per_Gallon',
    step: true
});

class ColorLegend extends React.Component {
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
                    colorLegend={colorLeg}
                />
            </Muze>

        );
    }
}

export default ColorLegend;

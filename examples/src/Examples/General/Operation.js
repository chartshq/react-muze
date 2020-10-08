import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/seattle-weather.csv")
        .then((d) => d.text());
    const schema = await fetch("/data/seattle-weather-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const calcFn = (datamodel) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    //Creating a new field
    return datamodel.calculateVariable(
        {
            name: 'Month',
            type: 'dimension',
        },
        ['Date'],
        (date) => {
            return monthNames[new Date(date).getMonth()];
        }
    );
};


class OperationParam extends React.Component {
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
                <Canvas rows={['Precipitation']} columns={['Month']} operation={calcFn} />
            </Muze>
        );
    }
}

export default OperationParam;

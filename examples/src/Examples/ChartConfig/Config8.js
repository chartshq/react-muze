import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Border } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = [{
        name: 'Acceleration',
        type: 'measure'
    }, {
        name: 'Year',
        type: 'dimension'
    }];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const border = Border.config()
    .create({
        style: 'transparent'
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
                    title="Coronavirus tests done by States"
                    rows={["Acceleration"]}
                    columns={["Year"]}
                    border={border}
                />
            </Muze>
        );
    }
}

export default AxisLabel;

import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
// import { Encoding } from '@chartshq/react-muze/configurations';

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

const operationFn = (dm) => {
    const dm1 = dm.calculateVariable({
        name: 'FullYear',
        type: 'dimension',
    }, ['Year'], val => {
        return new Date(val).getFullYear()
    }
    );

    return dm1.calculateVariable({
        name: 'FullYear1',
        type: 'dimension',
    }, ['Acceleration'], val => {
        return new Date(val).getFullYear()
    }
    );
    //selection
    //projection
}

class Operation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
        };
    }

    componentDidMount() {
        createDataModel().then((carsDm) => this.setState({ carsDm }));
    }

    render() {
        const { carsDm } = this.state;

        return (
            <Muze data={carsDm}>
                <Canvas
                    rows={["Acceleration"]}
                    columns={["FullYear"]}
                    operation={operationFn}
                >
                    {/* <Layer mark="bar" /> */}
                    {/* <Layer mark="line" /> */}
                </Canvas>
                <Canvas
                    rows={["Acceleration"]}
                    columns={["Year"]}
                >
                </Canvas>
            </Muze>
        );
    }
}

export default Operation;

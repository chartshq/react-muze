import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";

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
    const aa = dm.calculateVariable(
        {
            name: "CountVehicle",
            type: "measure",
            defAggFn: "count",
            numberFormat: val => parseInt(val, 10)
        },
        ["Name"], () => 1
    );
    console.log(aa.getData());
    return aa;
}

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
                    rows={["CountVehicle"]}
                    columns={["Cylinders"]}
                    color="Origin"
                    operation={operationFn}
                >
                    <Layer mark="bar" transformType="stack" />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

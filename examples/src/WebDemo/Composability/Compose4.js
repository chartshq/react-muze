import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Encoding, Axes } from "@chartshq/react-muze/configurations";

const share = Muze.Operators.share;
const DataModel = Muze.DataModel;
const composeLayers = Layer.Operators.compose;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const axis = Axes.config().create({
    showAxisName: true,
    name: "Measure"
});

class RangeArea extends React.Component {
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
                    rows={['Acceleration']}
                    columns={['Year']}
                    color="Origin"
                    detail={['Name']}
                >
                    <Layer mark="tick" />
                </Canvas>
            </Muze>
        );
    }
}

export default RangeArea;

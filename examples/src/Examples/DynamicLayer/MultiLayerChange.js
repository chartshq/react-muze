import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

export default class InteractiveLayers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
            marks: ['line', 'point']
        };
    }

    componentDidMount() {
        createDataModel().then((carsDm) => {
            this.setState({ carsDm });
        });
    }

    render() {
        const { carsDm } = this.state;
        const marks = this.state.marks;

        return (
            <div>
                <button
                    onClick={() => this.setState(() => ({
                        marks: ['bar', 'line']
                    }))}
                >
                    Change layers
                </button>

                <Muze data={carsDm}>
                    <Canvas columns={["Year"]} rows={["Horsepower"]}>
                        {
                            marks.map((m, i) => {
                                return <Layer mark={m} key={i}></Layer>
                            })
                        }
                    </Canvas>
                </Muze>
            </div>
        );
    }
}
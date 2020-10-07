import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Behaviours, Encoding } from '@chartshq/react-muze/configurations';

const share = Muze.Operators.share;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModel = await Muze.DataModel.onReady();
    const formattedData = await DataModel.loadData(data, schema);
    return new DataModel(formattedData);
}

const operationFn = (dm) => {
    let dm1 = dm.calculateVariable({
        name: 'Min Weight',
        type: 'measure',
        defAggFn: 'min'
    }, ['Weight_in_lbs'], val => val);

    return dm1.calculateVariable({
        name: 'Max Weight',
        type: 'measure',
        defAggFn: 'max'
    }, ['Weight_in_lbs'], val => val);
}

const barEncoding = Encoding.Bar.config()
    .x('Max Weight')
    .x0('Min Weight')
    .y('Year')
    .color({ value: () => '#ff9800' })
    .create();

const dissociateDrag = Behaviours.config().dissociateFrom(['brush', 'drag']).create();

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
        };
    }

    componentDidMount() {
        createDataModel().then((carsDm) => {
            console.log(carsDm.getData());
            this.setState({ carsDm });
        });
    }

    render() {
        const { carsDm } = this.state;

        return (
            <>
                {carsDm &&
                    <Muze data={carsDm} behaviours={dissociateDrag} crossInteractive>
                        <div>
                            <div>
                                <div>
                                    <Canvas
                                        columns={[share("Max Weight", "Min Weight")]}
                                        rows={["Year"]}
                                        width={500}
                                        width={500}
                                        operation={operationFn}
                                    >
                                        <Layer mark="bar" encoding={barEncoding} />
                                    </Canvas>
                                </div>
                            </div>
                        </div>
                    </Muze>
                }
            </>
        );
    }
}

export default Bar;

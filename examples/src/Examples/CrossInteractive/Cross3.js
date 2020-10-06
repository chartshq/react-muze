import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { SideEffects, Behaviours } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;
const { SpawnableSideEffect } = SideEffects;
const { VolatileBehaviour } = Behaviours;

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class SingleSelectBehaviour extends VolatileBehaviour {
    static formalName() {
        return "singleSelect";
    }
}

Muze.Operators.registerBehaviours([SingleSelectBehaviour]);

const beh = Behaviours.config().create({
    for: ['singleSelect'],
    on: ['click'],
    dissociateFrom: ["select", "click"]
});

const sideEffectConfig = SideEffects.config().create({
    for: [{
        name: 'highlighter',
        options: {
            strategy: 'focus'
        }
    }],
    on: ['singleSelect']
})

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
            <Muze data={carsDm} behaviours={beh} sideEffects={sideEffectConfig} crossInteractive>
                <Canvas
                    rows={["Miles_per_Gallon"]}
                    columns={["Maker"]}
                />
            </Muze>
        );
    }
}

export default Bar;

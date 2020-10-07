import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Behaviours } from '@chartshq/react-muze/configurations';

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

const utils = Muze.Utils;

const dblClickAction = firebolt => targetElement => {
    targetElement.on('dblclick', function (data) {
        const event = utils.getEvent();
        const mousePos = utils.getClientPoint(this, event);
        const payload = firebolt.getPayloadFromEvent('dblClick', mousePos, {
            data,
            event
        });
        if (payload.target) {
            alert(`${payload.target[0]} ${payload.target[1]} clicked`)
        }
        firebolt.triggerPhysicalAction('dblClick', payload);
    });
};

Muze.Operators.registerPhysicalActions({
    dblClick: dblClickAction
});

const beh = Behaviours.config()
    .for(['select'])
    .on(['dblClick'])
    .dissociateFrom(["select", "click"])
    .create();

class DblClick extends React.Component {
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
            <Muze data={carsDm} crossInteractive behaviours={beh}>
                <Canvas
                    rows={['Acceleration']}
                    columns={['Cylinders']}
                    color="Cylinders"
                    title="Physical Action double click"
                    subtitle="Mapping double click to select behaviour and disabling selection on single click"
                />
            </Muze>
        );
    }
}

export default DblClick 

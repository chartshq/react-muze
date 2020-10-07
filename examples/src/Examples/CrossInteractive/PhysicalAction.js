import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { Behaviours, SideEffects } from '@chartshq/react-muze/configurations';

const { DataModel } = Muze;
const { SpawnableSideEffect } = SideEffects;

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

class DataGridSideEffect extends SpawnableSideEffect {
    constructor(...params) {
        super(...params);
        if (this.firebolt.target() === 'visual-unit') {
            this.disable();
        }
    }

    static formalName() {
        return "data-grid";
    }

    apply(selectionSet, payload) {
        const resultNode = document.getElementById('result');

        if (!selectionSet.mergedEnter.model) {
            resultNode.innerText = "";
            return this;
        }
        const model = selectionSet.mergedEnter.model;
        const selectDm = this.firebolt.data().select({
            field: 'Cylinders',
            value: model.getField('Cylinders').data()[0],
            operator: 'eq'
        });
        const { data, schema } = selectDm.getData({ excludeFields: ['__id__'] });
        selectDm.dispose();

        const message = schema.reduce((acc, item, index) => {
            const value = data[0][index];
            acc += `${item.name} - ${typeof value === 'number' ? value.toFixed(2) : value} `;
            return acc;
        }, '');
        resultNode.innerText = `Selected Plot: ${message} `;
    }
}

const dblClickAction = firebolt => targetElement => {
    targetElement.on('dblclick', function (data) {
        const event = utils.getEvent();
        const mousePos = utils.getClientPoint(this, event);
        const payload = firebolt.getPayloadFromEvent('dblClick', mousePos, {
            data,
            event
        });
        firebolt.triggerPhysicalAction('dblClick', payload);
    });
};

Muze.Operators.registerPhysicalActions({
    dblClick: dblClickAction
});

Muze.Operators.registerSideEffects([DataGridSideEffect]);

const sideEffectMap = SideEffects.config()
    .for(['data-grid'])
    .on(['select'])
    .create();

const behaviourConfig = Behaviours.config()
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
            <>
                <Muze data={carsDm}
                    crossInteractive
                    behaviours={behaviourConfig}
                    sideEffects={sideEffectMap}
                >
                    <Canvas
                        rows={['Acceleration']}
                        columns={['Cylinders']}
                        color="Cylinders"
                        title="Physical Action double click"
                        subtitle="Mapping double click to select behaviour and disabling selection on single click"
                    />
                </Muze>
                <div>
                    <p
                        id="result"
                        style={{
                            fontSize: '18px',
                            marginLeft: '5%'
                        }}
                    />
                </div>
            </>
        );
    }
}

export default DblClick 

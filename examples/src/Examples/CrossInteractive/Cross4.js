import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";
import { Headers, Encoding, SideEffects } from "@chartshq/react-muze/configurations";

const { DataModel } = Muze;
const html = Muze.Operators.html;
const { SpawnableSideEffect, SurrogateSideEffect, GenericSideEffect } = Muze.SideEffects;

async function createDataModel() {
    const data = await fetch("/data/seattle-weather.csv")
        .then((d) => d.text());
    const schema = await fetch("/data/seattle-weather-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

function operationFn(dm) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return dm.calculateVariable(
        {
            name: "Month",
            type: "dimension"
        },
        ["Date"],
        (date) => {
            return monthNames[new Date(date).getMonth()];
        }
    );
}

const tickEncoding = Encoding.Tick.config().create({
    x: null,
    y: "Precipitation",
    color: {
        value: () => "#f71616"
    }
});

console.log(tickEncoding);

const subtitle = Headers.config()
    .content(html`Selecting individual months will give the <b>average</b> for those months`)
    .create();

class AverageLine extends SurrogateSideEffect {
    static formalName() {
        return "averageLine";
    }

    apply(selectionSet) {
        const model = selectionSet.mergedEnter.model;
        if (model) {
            const groupedModel = model.groupBy([]);
            this.setLayerData(groupedModel, 'averageLine');
        } else {
            this.resetLayerData('averageLine');
        }
    }

    static target() {
        return "visual-unit";
    }
}

// SideEffects.register(AverageLine);

const sideEffectNew = SideEffects.config().create({
    for: ['averageLine', 'averageLine'],
    on: ['select', 'brush'],
    effect: AverageLine
});

class Line extends React.Component {
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
            <Muze data={dm} crossInteractive sideEffects={[sideEffectNew]}>
                <Canvas
                    rows={['Precipitation']}
                    columns={['Month']}
                    title="Amount of precipitation for every month in the year with their average"
                    subtitle={subtitle}
                    operation={operationFn}
                >
                    <Layer mark="bar" />
                    <Layer
                        mark="tick"
                        name="averageLine"
                        className="averageLine"
                        calculateDomain={false}
                        interactive={false}
                        source={(dm) => dm.groupBy([])}
                        encoding={tickEncoding}
                    />
                </Canvas>
            </Muze>
        );
    }
}

export default Line;

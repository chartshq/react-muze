import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";

const { DataModel } = Muze;
const { html } = Muze.Operators;
const DateTimeFormatter = DataModel.DateTimeFormatter;

async function createDataModel() {
    const data = await fetch("/data/economic-indicator.json")
        .then((d) => d.json());
    const schema = [
        {
            name: 'date',
            type: 'dimension',
            subtype: 'temporal',
            format: '%Y-%m-%d'
        },
        {
            name: 'value',
            type: 'measure'
        },
        {
            name: 'indicator',
            type: 'dimension'
        },
        {
            name: 'unit',
            type: 'dimension'
        }
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dms: [],
        };
    }

    componentDidMount() {
        createDataModel().then((dm) => {
            const dms = dm.splitByRow(['indicator']);
            this.setState({ dms });
        });
    }

    render() {
        const { dms } = this.state;

        return (
            dms.map(dm => {
                const title = dm.getField('indicator').data()[0];

                return (
                    <Muze data={dm} crossInteractive>
                        <Canvas rows={[[], ["value"]]} columns={["date"]} detail={["indicator", "unit"]} title={title}>
                            <Layer mark="area" interpolate="catmullRom" />
                        </Canvas>
                    </Muze>
                )
            })
        );
    }
}

export default Line;

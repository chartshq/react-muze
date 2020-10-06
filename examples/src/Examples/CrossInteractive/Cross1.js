import * as React from "react";
import Muze, { Canvas, Layer } from "@chartshq/react-muze/components";

const { DataModel } = Muze;

async function createDataModel() {
    const data = await fetch("/data/sp500.csv")
        .then((d) => d.text());
    const schema = [
        {
            name: "date",
            type: "dimension",
            subtype: "temporal",
            format: "%b %d %Y"
        },
        {
            name: "price",
            type: "measure"
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
        const propagationBehMap = {
            brush: ["filter"]
        };

        return (
            <Muze data={dm} crossInteractive>
                <Canvas rows={['price']} columns={['date']} title="Select a range from the bottom chart to get a detailed view for that range">
                    <Layer mark="area" />
                </Canvas>
                <Canvas rows={['price']} columns={['date']} height={150} propagationBehaviourMap={propagationBehMap}>
                    <Layer mark="area" interpolate="catmullRom" />
                </Canvas>
            </Muze>
        );
    }
}

export default Line;

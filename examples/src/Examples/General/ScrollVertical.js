import * as React from "react";
import Muze, { Canvas } from "@chartshq/react-muze/components";
import { ScrollBar, SCROLL_VERTICAL } from '@chartshq/react-muze/configurations';

async function createDataModel() {
    const data = await fetch("/data/cars.json")
        .then((d) => d.json());
    const schema = await fetch("/data/cars-schema.json")
        .then((d) => d.json());
    const DataModelClass = await Muze.DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

//position vertical scrollbar on the left end of the chart
const scrollbar = ScrollBar
    .config()
    .verticalAlign(SCROLL_VERTICAL.LEFT)
    .create();

class VerticalScroll extends React.Component {
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
            <Muze data={dm}>
                <Canvas
                    rows={['Acceleration']}
                    columns={['Origin']}
                    scrollBar={scrollbar}
                    width={100}
                    height={100}
                />
            </Muze>
        );
    }
}

export default VerticalScroll;

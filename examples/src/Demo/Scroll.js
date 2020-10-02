import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { Legend, GridLines, ScrollBar, SCROLL_HORIZONTAL, SCROLL_VERTICAL, LEGEND_POSITION } from '@chartshq/react-muze/configurations';

const createDataModel1 = async () => {
    const data = await fetch('/data/movies.json').then((d) => d.json());
    const schema = await fetch('/data/movies-schema.json').then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
};

class Operation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dm: null,
        };
    }

    componentDidMount() {
        createDataModel1().then((dm) => this.setState({ dm }));
    }

    render() {
        const { dm } = this.state;
        // const scrollbar1 = ScrollBar.config().create({
        //     horizontalAlign: SCROLL_HORIZONTAL.TOP,
        //     verticalAlign: SCROLL_VERTICAL.LEFT
        // });

        const scrollbar = ScrollBar.config().horizontalAlign(SCROLL_HORIZONTAL.TOP).verticalAlign(SCROLL_VERTICAL.LEFT).create();
        const colorLeg = Legend.config()
            .title('Custom legend')
            .position(LEGEND_POSITION.TOP)
            .textWidth(10)
            .textFormatter((val) => `$${val}`)
            .border(4)
            .borderColor('red')
            .create();
        const gridLine = GridLines.config().show(false).showHorizontal(true).showVertical(false).create();

        return (
            <Muze data={dm}>
                <Canvas
                    rows={['Revenue (Millions)']}
                    columns={['Rating']}
                    detail={['Title', 'Year', 'Genre']}
                    gridLines={gridLine}
                    color="Revenue (Millions)"
                    shape="Year"
                    scrollBar={scrollbar}
                    width={200}
                    height={100}
                >
                    {/* <ScrollBar />
                    <Legend />
                    <Axes /> */}
                </Canvas>
            </Muze>
        );
    }
}

export default Operation;

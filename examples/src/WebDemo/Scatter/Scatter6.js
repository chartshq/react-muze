import * as React from "react";
import Muze, { Canvas, DataModel, Layer } from "@chartshq/react-muze/components";
import { html, Tooltip, Color, Size, Encoding, Axes, Headers, ALIGNMENT, Legend } from "@chartshq/react-muze/configurations";

async function createDataModel() {
    const data = await fetch("/data/word-frequency.json")
        .then((d) => d.json());
    const schema = await fetch("/data/word-frequency-schema.json")
        .then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    DataModelClass.unsetInvalids(['']);
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
}

const tooltipFormatterFn = (dataModel, context) => {
    const rows = dataModel.getRowsCount();
    let tooltipContent = '';

    for (let i = 0; i < rows; i++) {
        const usedMore = dataModel.getValueAtIndex('Used More', i);
        const word = dataModel.getValueAtIndex('word', i);
        const freq = dataModel.getValueAtIndex('f', i);
        tooltipContent += `<p>The word <b>${word}</b> has been used more by <b>${usedMore}s</b> and its frequency of usage is <b>${freq}</b> </p>`;
    }
    return html`${tooltipContent}`;
}

const operationFn = (dm) => {
    let dm1 = dm.calculateVariable(
        {
            name: 'Used More',
            type: 'dimension',
        },
        ['x'], x => {
            return (x > 0 ? 'Female' : 'Male')
        },
    );
    return dm1.calculateVariable(
        {
            name: 'displayWord',
            type: 'dimension',
        },
        ['f', 'word'], (f, word) => {
            return (f > 15000 ? word : '')
        },
    );
}

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
        const color = Color.config().field('Used More').range(['#a9d3f2', '#f4a4c7']).create();
        const size = Size.config().field('f').range([1, 2450]).create();
        const text = Encoding.Text.config().text('displayWord').color({
            value: () => '#000'
        }).create();
        const hideAxis = Axes.config().show(false).create();
        const title = Headers.config().content('Frequency of usage of words by males and females')
            .align(ALIGNMENT.CENTER).create();
        const subtitle = Headers.config().content('An example of a Bubble Plot')
            .align(ALIGNMENT.CENTER).create();
        const legend = Legend.config().show(false).create();
        const tooltip = Tooltip.config().formatter(tooltipFormatterFn).create();

        return (
            <Muze data={carsDm}>
                <Canvas
                    operation={operationFn}
                    rows={['y']}
                    columns={['x']}
                    detail={['word', 'displayWord']}
                    xAxis={hideAxis}
                    yAxis={hideAxis}
                    title={title}
                    subtitle={subtitle}
                    color={color}
                    size={size}
                    sizeLegend={legend}
                >
                    <Layer mark="point" />
                    <Layer mark="text" encoding={text} />
                </Canvas>
            </Muze>
        );
    }
}

export default Bar;

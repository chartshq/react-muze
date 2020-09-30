import * as React from 'react';
import Muze, { Canvas, Layer, DataModel } from '@chartshq/react-muze/components';
import {
    Axes,
    Legend,
    LEGEND_POSITION,
    Color,
    Size,
    Shape,
    Headers,
    POSITION,
    ALIGNMENT,
    GridLines,
    GridBands,
    ScrollBar,
    SCROLL_VERTICAL,
    SCROLL_HORIZONTAL,
    html,
    Encoding,
    Tooltip,
    SpawnableSideEffect,
    SideEffects,
    SurrogateSideEffect,
    Behaviours,
    VolatileBehaviour,
} from '@chartshq/react-muze/configurations';

const createDataModel = async () => {
    const data = await fetch(
        'https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars.json'
    ).then((d) => d.json());
    // const schema = await fetch('https://raw.githubusercontent.com/chartshq/datamodel-app-template/master/public/data/cars-schema.json').then((d) => d.json());
    const schema = [
        {
            name: 'Name',
            type: 'dimension',
        },
        {
            name: 'Maker',
            type: 'dimension',
        },
        {
            name: 'Miles_per_Gallon',
            type: 'measure',
            defAggFn: 'avg',
        },
        {
            name: 'Displacement',
            type: 'measure',
            defAggFn: 'sum',
        },
        {
            name: 'Horsepower',
            type: 'measure',
            defAggFn: 'sum',
        },
        {
            name: 'Weight_in_lbs',
            type: 'measure',
            defAggFn: 'min',
        },
        {
            name: 'Acceleration',
            type: 'measure',
            defAggFn: 'sum',
        },
        {
            name: 'Origin',
            type: 'dimension',
        },
        {
            name: 'Cylinders',
            type: 'dimension',
        },
        {
            name: 'Year',
            type: 'dimension',
            subtype: 'temporal',
            format: '%Y-%m-%d',
        },
    ];
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
};

const createDataModel1 = async () => {
    const data = await fetch('/data/movies.json').then((d) => d.json());
    const schema = await fetch('/data/movies-schema.json').then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
};

const createDataModel2 = async () => {
    const data = await fetch('https://assets.codepen.io/3875509/seattle-weather.csv').then((d) => d.text());
    const schema = await fetch('https://assets.codepen.io/3875509/seattle-weather-schema.json').then((d) => d.json());
    const DataModelClass = await DataModel.onReady();
    const formattedData = await DataModelClass.loadData(data, schema);
    return new DataModelClass(formattedData);
};

const selectionFn = (datamodel) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return datamodel.calculateVariable(
        {
            name: 'Month',
            type: 'dimension',
        },
        ['Date'],
        (date) => {
            return monthNames[new Date(date).getMonth()];
        }
    );
};

class AverageLine extends SurrogateSideEffect {
    static formalName() {
        return 'averageLine';
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
        return 'visual-unit';
    }
}

class SingleSelect extends VolatileBehaviour {
    static formalName() {
        return 'singleSelect';
    }
}

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsDm: null,
            moviesDm: null,
            seattleDm: null,
            row: ['Miles_per_Gallon'],
            columns: ['Origin'],
            layerType: 'bar',
        };
        this.inputBox = React.createRef();
        this.inputBoxCol = React.createRef();
    }

    componentDidMount() {
        Promise.all([createDataModel(), createDataModel1(), createDataModel2()]).then(([dm, dm1, dm2]) => {
            this.setState({ carsDm: dm, moviesDm: dm1, seattleDm: dm2 });
        });
    }

    updateChart1 = () => {
        const { row, columns } = this.state;
        if (this.inputBox.current && this.inputBoxCol.current) {
            const rows = this.inputBox.current.value.split(',');
            const cols = this.inputBoxCol.current.value.split(',');

            this.setState({ row: rows || row, columns: cols || columns });
        }
    };

    changeLayer = () => {
        this.setState({ layerType: 'point' });
    };

    render() {
        const barEncoding = Encoding.Bar.config()
            .color({
                value: () => 'red',
            })
            .create();

        const lineEncoding = Encoding.Line.config()
            .color({
                value: () => 'green',
            })
            .create();

        const EncodingInteractive = Encoding.Tick.config()
            .x(null)
            .y('Precipitation')
            .color({
                value: () => '#f71616',
            })
            .create();

        const { carsDm = null, moviesDm = null, seattleDm = null, row, columns, layerType } = this.state;
        const color = Color.config().create({
            field: 'Cylinders',
            // range: ['magenta', 'green', 'crimson', 'silver'],
        });
        console.log(color);
        const size = Size.config().field('Revenue (Millions)').create();
        const shape = Shape.config().field('Year').create();
        const title = Headers.config()
            .text('Text title')
            .html(html`<i>I am</i> title`)
            .position(POSITION.TOP)
            .create();
        const subtitle = Headers.config().create({
            content: html`<i>This</i> is a chart <u>subtitle</u>`,
            position: POSITION.BOTTOM,
            align: ALIGNMENT.RIGHT,
        });

        SideEffects.register(AverageLine);
        Behaviours.register(SingleSelect);

        //Change here
        const sideEffectNew = SideEffects.config().create({
            for: ['averageLine'],
            on: ['select'],
            dissociateFrom: ['tooltip', 'highlight'],
        });
        const sideEffectNew1 = SideEffects.config().create({
            for: ['averageLine'],
            on: ['brush'],
            dissociateFrom: ['tooltip', 'highlight'],
        });
        const sideEffectNew2 = SideEffects.config().create({
            for: ['highlighter'],
            on: ['singleSelect'],
            dissociateFrom: ['tooltip', 'highlight'],
        });

        const behaviourNew = Behaviours.config().create({
            for: [['singleSelect']],
            on: ['click'],
        });

        // const yAxis = Axes.config()
        //     .name('Revenue in millions')
        //     .show(true)
        //     // .showAxisName(true)
        //     // .axisNamePadding(10)
        //     // .padding(0.9)
        //     .showInnerTicks(true)
        //     // .numberOfTicks(7)
        //     .tickFormat((currentTick) => `₹${currentTick}`)
        //     // .labels({
        //     //   rotation: -45,
        //     // })
        //     .create();

        // {
        //     name: 'something canvas',
        //     showAxisName: true,
        //     tickFormat: (val) => `#${val}`,
        // }
        const xAxis = Axes.config().showAxisName(true).tickFormat((val) => `$${val}`).name('asdashdahsdh ajsdhsa').create();

        // const xAxis2 = Axes.config().create({
        //     name: 'something canvas',
        //     showAxisName: false,
        //     tickFormat: (val) => `##1234${val}`,
        // });

        // const newXAxis = Axes.config().create({
        //     name: 'custome name',
        // });

        const colorLeg = Legend.config()
            .title('Custom legend')
            .position(LEGEND_POSITION.TOP)
            .textWidth(10)
            .textFormatter((val) => `$${val}`)
            .border(4)
            .borderColor('red')
            .create();

        const colorLeg1 = Legend.config().title('Local legend').create();

        const sizeLeg = Legend.config().create({
            title: 'something new',
            position: LEGEND_POSITION.TOP,
            textWidth: 10,
            textFormatter: (val) => `#${val}`,
            border: 1,
            borderColor: 'blue',
        });
        const gridLine = GridLines.config().show(false).showHorizontal(true).showVertical(false).create();
        // const gridBand = GridBands.config().showHorizontal(true).create();
        // const gridBand = GridBands.config().create({
        //     showVertical: false,
        //     showHorizontal: true
        // });
        const scrollbar = ScrollBar.config().horizontalAlign(SCROLL_HORIZONTAL.TOP).create();
        const encoding = {
            color: {
                value: () => 'red',
            },
        };

        const interactionBar = {
            highlight: {
                style: {
                    stroke: 'red',
                    'stroke-width': '2px',
                },
                strokePosition: 'inside',
            },
        };

        const lifecycleHandlers = {
            onAnimationEnd: () => {
                console.log('onAnimationEnd');
            },
            onDrawn: () => {
                console.log('onDrawn');
            },
            onBeforeDraw: () => {
                console.log('onBeforeDraw');
            },
            onUpdated: () => {
                console.log('onUpdated');
            },
            onBeforeUpdate: () => {
                console.log('onBeforeUpdate');
            },
            onInitialized: () => {
                console.log('onInitialized');
            },
            onBeforeRemove: () => {
                console.log('onBeforeRemove');
            },
            onRemoved: () => {
                console.log('onRemoved');
            },
        };

        const newTooltip = Tooltip.config()
            .on('highlight')
            // Behaviours.HIGHLIGHT
            .mode('fragmented')
            .formatter((dataStore, config, context) => {
                const colorAxis = context.axes.color[0];
                const tooltipData = dataStore.getData().data;

                let tooltipContent = '';
                tooltipData.forEach((dataArray, i) => {
                    const originVal = dataArray[dataStore.getFieldIndex('Origin')];
                    const milesVal = dataArray[dataStore.getFieldIndex('Miles_per_Gallon')];

                    tooltipContent += `
${i ? '' : `<h3 style="background-color:#EAEAEA">Country: ${originVal}</h3>`}
<div style="background: red; padding: 4px 8px;>
<u>Origin ${originVal}</u> cars with an average miles of <b>${milesVal} HP</b>
</div>
`;
                    tooltipContent += '<br>';
                });
                return html`${tooltipContent}`;
            })
            .create();

        const newTooltip1 = Tooltip.config()
            .on('select')
            .mode('fragmented')
            .formatter((dataStore, config, context) => {
                const colorAxis = context.axes.color[0];
                const tooltipData = dataStore.getData().data;

                let tooltipContent = '';
                tooltipData.forEach((dataArray, i) => {
                    console.log(dataArray);
                    const originVal = dataArray[dataStore.getFieldIndex('Origin')];
                    const milesVal = dataArray[dataStore.getFieldIndex('Miles_per_Gallon')];

                    tooltipContent += `
${i ? '' : `<h3 style="background-color:#EAEAEA">asdhasdajsjs: ${originVal}</h3>`}
<div style="background: red; padding: 4px 8px;>
<u>Origin ${originVal}</u> cars with an average miles of <b>${milesVal} HP</b>
</div>
`;
                    tooltipContent += '<br>';
                });
                return html`${tooltipContent}`;
            })
            .create();

        return (
            <>
                <input type="text" ref={this.inputBox} />
                <input type="text" ref={this.inputBoxCol} />
                <button type="button" onClick={this.updateChart1}>
                    Submit
        </button>
                {carsDm && (
                    <Muze
                        data={carsDm}
                        colorScheme={['#00876C', '#E88E63', '#D43D51', 'magenta']}
                        onAnimationEnd={() => console.log('passed on <Muze/>')}
                    >
                        <Canvas rows={['Miles_per_Gallon']} columns={['Cylinders']} color={color} />
                        <Canvas
                            className="led-zeppelin"
                            rows={row}
                            columns={columns}
                            color="Origin"
                            title={title}
                            subtitle={subtitle}
                            onAnimationEnd={(canvas) => {
                                canvas.client.config({
                                    border: {
                                        style: 'solid',
                                        color: 'red',
                                        width: 2,
                                    },
                                });
                            }}
                            tooltips={[newTooltip, newTooltip1]}
                        />
                        <span>Hello world</span>
                        <Canvas rows={['Miles_per_Gallon']} columns={['Cylinders']} color="Origin"></Canvas>
                    </Muze>
                )}
                {/* {seattleDm && (
          <Muze data={seattleDm} sideEffects={[sideEffectNew, sideEffectNew1, sideEffectNew2]} behaviours={behaviourNew} crossInteractive>
            <Canvas rows={['Precipitation']} columns={['Month']} operation={selectionFn}>
              <Layer mark="bar" />
              <Layer
                mark="tick"
                name="averageLine"
                className="averageLine"
                encoding={EncodingInteractive}
                calculateDomain={false}
                interactive={false}
                source={(dm) => dm.groupBy([])}
              />
            </Canvas>
          </Muze>
        )}
        {moviesDm && (
          <Muze data={moviesDm} xAxis={newXAxis}>
            <Canvas rows={['Rating']} columns={['Genre']}>
              <Layer mark={layerType} interactionStyle={interactionBar} />
              <Layer mark="line" interpolate="catmullRom" className="new-layer" encoding={lineEncoding} />
            </Canvas>
          </Muze>
        )} */}
                {moviesDm && (
                    <Muze data={moviesDm} colorLegend={colorLeg} sizeLegend={sizeLeg}>
                        <Canvas
                            rows={['Revenue (Millions)']}
                            columns={['Rating']}
                            detail={['Title', 'Year', 'Genre']}
                            xAxis={xAxis}
                            gridLines={gridLine}
                            color="Revenue (Millions)"
                            shape="Year"
                            width={200}
                            height={100}
                            scrollBar={scrollbar}
                        ></Canvas>
                    </Muze>
                )
                }
                <button onClick={this.changeLayer}>Change layer</button>
            </>
        );
    }
}

export default Test;

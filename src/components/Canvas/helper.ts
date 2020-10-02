import { ChartConfig, SanitizedConfig, CanvasState } from './interfaces';
import { CanvasBuilder } from '../../helpers/CanvasBuilder';
import { multiTooltipIntoMuze } from '../../configurations/Tooltip';

import muze from "@chartshq/muze";
import { FieldRangeInterface } from '../../configurations/RetinalEncoding/types';

const getLegendConfig = (legendConfig: any, legendType: string) => {
  const {
    position = 'right',
    show = 'true',
    textWidth,
    textFormatter,
    title,
    border,
    borderColor,
    padding,
  } = legendConfig;
  const defaultFn = (val: string) => val;

  const sanitizedLegendConfig: any = {
    position,
  };

  // Create retinal legend config
  sanitizedLegendConfig[legendType] = sanitizedLegendConfig[legendType] || {
    show,
  };

  if (textWidth) {
    sanitizedLegendConfig[legendType].item = {
      text: {
        width: textWidth,
        formatter: textFormatter || defaultFn,
      },
    };
  }
  if (title) {
    sanitizedLegendConfig[legendType].title = {
      text: title,
    };
  }
  if (border) {
    sanitizedLegendConfig[legendType].border = border;
  }
  if (borderColor) {
    sanitizedLegendConfig[legendType].borderColor = borderColor;
  }
  if (padding) {
    sanitizedLegendConfig[legendType].padding = padding;
  }

  return sanitizedLegendConfig;
};

const configSanitizer = (config: ChartConfig, context: any): SanitizedConfig => {
  const { xAxis = null, yAxis = null, colorLegend = {}, sizeLegend = {}, shapeLegend = {}, scrollBar = {}, colorScheme = null, data: globalDm, crossInteractive = false } = context;
  const {
    rows,
    columns,
    operation = (dm: muze.DataModel) => dm,
    color,
    size = (null as unknown) as string,
    shape = (null as unknown) as string,
    detail = (null as unknown) as string[],
    width = 600,
    height = 400,
    colorLegend: canvasColorLegend = null,
    sizeLegend: canvasSizeLegend = null,
    shapeLegend: canvasShapeLegend = null,
    gridLines = {},
    gridBands = {},
    scrollBar: canvasScrollBar = null,
    showHeaders = false,
    xAxis: canvasXAxis,
    yAxis: canvasYAxis,
    className,
    colorScheme: canvasColorScheme = null,
    onInitialized = context.onInitialized,
    onBeforeUpdate = context.onBeforeUpdate,
    onUpdated = context.onUpdated,
    onBeforeDraw = context.onBeforeDraw,
    onDrawn = context.onDrawn,
    onBeforeRemove = context.onBeforeRemove,
    onRemoved = context.onRemoved,
    onAnimationEnd = context.onAnimationEnd,
    tooltips = [],
    crossInteractive: canvasCrossInteractive = false,
    sideEffects = {},
    sort,
    border,
    transform,
    axesRadius
  } = config;

  let { title, subtitle } = config;

  if (typeof title === "string") {
    title = { content: title }
  }
  if (typeof subtitle === "string") {
    subtitle = { content: subtitle }
  }

  let canvasData = globalDm;
  let chartColor = (color || {}) as FieldRangeInterface;

  if (typeof color === 'string') {
    chartColor = {
      field: color,
    };
  }

  if (canvasData) {
    canvasData = operation(globalDm);
  }
  // Use canvas or muze colorScheme only if passed
  if (!chartColor.range) {
    if (canvasColorScheme) {
      chartColor.range = canvasColorScheme;
    } else if (colorScheme) {
      chartColor.range = colorScheme;
    }
  }

  const sideEffectsMap = (sideEffects.on || []).reduce((acc: any, elem: string, i: number) => {
    acc[elem] = sideEffects.for[i];
    return acc;
  }, {});

  return {
    data: canvasData,
    rows,
    columns,
    width,
    height,
    color: chartColor,
    size,
    shape,
    detail,
    title,
    subtitle,
    xAxis: canvasXAxis || xAxis,
    yAxis: canvasYAxis || yAxis,
    legend: {
      ...getLegendConfig(canvasColorLegend || colorLegend, 'color'),
      ...getLegendConfig(canvasSizeLegend || sizeLegend, 'size'),
      ...getLegendConfig(canvasShapeLegend || shapeLegend, 'shape'),
    },
    gridLines,
    gridBands,
    scrollBar: canvasScrollBar || scrollBar,
    showHeaders,
    className,
    onInitialized,
    onBeforeUpdate,
    onUpdated,
    onBeforeDraw,
    onDrawn,
    onBeforeRemove,
    onRemoved,
    onAnimationEnd,
    tooltips,
    crossInteractive: canvasCrossInteractive,
    canvasSideEffects: sideEffectsMap,
    sort,
    border,
    transform,
    axesRadius
  };
};

// NOTE: creates chart
export const createChart = (
  state: CanvasState,
  props: ChartConfig,
  mountPoint: HTMLInputElement,
  context: any
): void => {
  const { canvas, layerConfig } = state;
  const {
    data,
    rows,
    columns,
    width,
    height,
    color,
    detail,
    size,
    shape,
    title,
    subtitle,
    xAxis,
    yAxis,
    legend,
    gridLines,
    gridBands,
    scrollBar,
    showHeaders,
    className,
    onInitialized,
    onBeforeUpdate,
    onUpdated,
    onBeforeDraw,
    onDrawn,
    onBeforeRemove,
    onRemoved,
    onAnimationEnd,
    tooltips,
    crossInteractive,
    canvasSideEffects,
    sort,
    border = {},
    axesRadius,
    transform
  } = configSanitizer(props, context);

  const html = muze.Operators.html;

  if (canvas && data && mountPoint) {
    //Add canvas entry in parent
    context.addChildChart(canvas);
    //Add canvas entry in parent only if crossInteractive prop is passed to canvas
    crossInteractive && context.addCrossInteraction(canvas);

    const config: any = {
      axes: {
        x: xAxis,
        y: yAxis,
        radius: {
          ...axesRadius
        }
      },
      legend,
      gridLines,
      gridBands,
      scrollBar,
      showHeaders,
      interaction: {
        ...multiTooltipIntoMuze(tooltips),
      },
      border,
    };

    // had to do it like this because muze was throwing
    // an error on `config = { ...config, sort: sort }`
    // error: `Cannot convert undefined or null`
    if (sort) {
      config.sort = sort;
    }

    CanvasBuilder.config(canvas)
      .data(data)
      .rows(rows)
      .columns(columns)
      .width(width)
      .height(height)
      .transform(transform)
      .color(color)
      .size(size)
      .shape(shape)
      .detail(detail)
      .title(title)
      .subtitle(subtitle)
      .layers(layerConfig)
      .config(config)
      .mount(mountPoint)
      .onInitialized(onInitialized)
      .onBeforeUpdate(onBeforeUpdate)
      .onUpdated(onUpdated)
      .onBeforeDraw(onBeforeDraw)
      .onDrawn(onDrawn)
      .onBeforeRemove(onBeforeRemove)
      .onRemoved(onRemoved)
      .onAnimationEnd(onAnimationEnd)
      .create();

    const canvasClass = className ? `${className} muze-${canvas.alias()}` : `muze-${canvas.alias()}`;
    mountPoint.classList.add(...canvasClass.split(' '));
  }
};

import { CanvasProps, SanitizedCanvasProps } from "../../../types"
import { FieldRangeInterface } from "../../../../configurations/RetinalEncoding/types";
import { Headers } from '../../../../configurations/Headers';
import { LegendInterface } from "../../../../configurations/Legend/types";

export const getLegendConfig = (legendConfig: LegendInterface, legendType: string) => {
  const {
    position = "right",
    show = "true",
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

export const configSanitizer = (
  config: CanvasProps,
  context: any
): SanitizedCanvasProps => {
  const {
    xAxis = null,
    yAxis = null,
    colorLegend = {},
    sizeLegend = {},
    shapeLegend = {},
    scrollBar = {},
    colorScheme = null,
    data: globalDm,
    crossInteractive = false,
  } = context;

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
    tooltips = [],
    crossInteractive: canvasCrossInteractive = false,
    sideEffects = {},
    sort,
    border,
    transform,
    radiusAxis,
    autoGroupBy = true,
    facetRows,
    highlightExact = false,
    propagationBehaviourMap,
  } = config;

  let { title, subtitle } = config;

  if (typeof title === "string") {
    title = Headers.config().content(title).create();
  }
  if (typeof subtitle === "string") {
    subtitle = Headers.config().content(subtitle).create();
  }

  let canvasData = globalDm;
  let chartColor = (color || {}) as FieldRangeInterface;

  if (typeof color === "string") {
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

  const sideEffectsMap = (sideEffects.on || []).reduce(
    (acc: any, elem: string, i: number) => {
      acc[elem] = sideEffects.for[i];
      return acc;
    },
    {}
  );

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
      ...getLegendConfig(canvasColorLegend || colorLegend, "color"),
      ...getLegendConfig(canvasSizeLegend || sizeLegend, "size"),
      ...getLegendConfig(canvasShapeLegend || shapeLegend, "shape"),
    },
    gridLines,
    gridBands,
    scrollBar: canvasScrollBar || scrollBar,
    showHeaders,
    className,
    tooltips,
    crossInteractive: canvasCrossInteractive,
    canvasSideEffects: sideEffectsMap,
    sort,
    border,
    transform,
    radiusAxis,
    autoGroupBy: {
      disabled: !autoGroupBy,
    },
    facet: {
      rows: {
        ...facetRows,
      },
    },
    highlight: {
      exact: highlightExact,
    },
    propagationBehaviourMap,
  };
};

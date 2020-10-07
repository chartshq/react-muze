import { CanvasBuilder } from "./CanvasBuilder";
import { multiTooltipIntoMuze } from "../../../configurations/Tooltip";
import { configSanitizer } from "./helpers";
import { CanvasProps, CanvasState } from "../../types";
import { Config } from "./Config";

export const createChart = (
  state: CanvasState,
  props: CanvasProps,
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
    tooltips,
    crossInteractive,
    canvasSideEffects,
    sort = {},
    border = {},
    radiusAxis,
    transform,
    autoGroupBy,
    facet,
    highlight,
    propagationBehaviourMap,
  } = configSanitizer(props, context);

  if (canvas && data && mountPoint) {
    if (propagationBehaviourMap) {
      context.addPropagationBehaviour(canvas, propagationBehaviourMap);
    }

    //Add canvas entry in parent
    context.addChildChart(canvas);
    //Add canvas entry in parent only if crossInteractive prop is passed to canvas
    crossInteractive && context.addCrossInteraction(canvas);

    const config = Config.config().create({
      axes: {
        x: xAxis,
        y: yAxis,
        radius: {
          ...radiusAxis,
        },
      },
      legend,
      gridLines,
      gridBands,
      scrollBar,
      showHeaders,
      interaction: {
        ...multiTooltipIntoMuze(tooltips),
        behaviours: {
          highlight: {
            ...highlight,
          },
        },
      },
      border,
      autoGroupBy,
      facet,
      sort,
    });

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
      .layers(Object.values(layerConfig))
      .config(config)
      .mount(mountPoint)
      .create();

    const canvasClass = className
      ? `${className} muze-${canvas.alias()}`
      : `muze-${canvas.alias()}`;
    mountPoint.classList.add(...canvasClass.split(" "));
  }
};

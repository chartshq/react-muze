import { Tooltip } from "../../configurations/Tooltip";
import { Border } from "../../configurations/Border";
import {
  LinearAxisOptions,
  RadialAxisOptions,
} from "../../configurations/Axes/types";
import { LegendInterface } from "../../configurations/Legend/types";
import { ScrollBarInterface } from "../../configurations/ScrollBar/types";
import { GridBandsInterface } from "../../configurations/GridBands/types";
import { GridLinesInterface } from "../../configurations/GridLines/types";
import { FieldRangeInterface } from "../../configurations/RetinalEncoding/types";
import { HeadersConfig } from "../../configurations/Headers/types";
import { MuzeConstants } from "../../constants";

interface RetinalEncoding {
  field: string | null;
  range?: string[] | number[];
}

export interface ChartConfig {
  rows: string[];
  columns: string[];
  detail?: string[];
  color?: string | FieldRangeInterface;
  size?: string | FieldRangeInterface;
  shape?: string | FieldRangeInterface;
  width?: number;
  height?: number;
  operation?: Function;
  title?: string | HeadersConfig | undefined;
  subtitle?: string | HeadersConfig | undefined;
  xAxis?: LinearAxisOptions;
  yAxis?: LinearAxisOptions;
  colorLegend?: LegendInterface;
  sizeLegend?: LegendInterface;
  shapeLegend?: LegendInterface;
  gridLines?: GridLinesInterface;
  gridBands?: GridBandsInterface;
  scrollBar?: ScrollBarInterface;
  showHeaders?: boolean;
  className?: string;
  colorScheme?: string[];
  onInitialized?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeDraw?: Function;
  onDrawn?: Function;
  onBeforeRemove?: Function;
  onRemoved?: Function;
  onAnimationEnd?: Function;
  tooltips?: Array<Tooltip>;
  crossInteractive?: boolean;
  sideEffects?: any;
  sort?: Map<string, MuzeConstants.SORT_ORDER>;
  border: Border;
  transform?: {
    [key: string]: Function;
  };
  radiusAxis?: RadialAxisOptions;
  autoGroupBy?: boolean;
  facetRows?: {
    verticalAlign?: string;
  };
  highlightExact?: boolean;
  propagationBehaviourMap?: {
    [key: string]: string[];
  };
}

export interface SanitizedConfig {
  data: muze.DataModel;
  rows: string[];
  columns: string[];
  detail: string[];
  color: string | FieldRangeInterface;
  shape: string | FieldRangeInterface;
  size: string | FieldRangeInterface;
  width: number;
  height: number;
  operation?: Function;
  title?: HeadersConfig | undefined;
  subtitle?: HeadersConfig | undefined;
  xAxis?: LinearAxisOptions;
  yAxis?: LinearAxisOptions;
  gridLines?: GridLinesInterface;
  gridBands?: GridBandsInterface;
  scrollBar?: ScrollBarInterface;
  showHeaders: boolean;
  className?: string;
  legend?: LegendInterface;
  onInitialized?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeDraw?: Function;
  onDrawn?: Function;
  onBeforeRemove?: Function;
  onRemoved?: Function;
  onAnimationEnd?: Function;
  tooltips?: Tooltip[];
  crossInteractive: boolean;
  canvasSideEffects: any;
  sort?: Map<string, MuzeConstants.SORT_ORDER>;
  border: Border;
  transform?: {
    [key: string]: Function;
  };
  radiusAxis?: RadialAxisOptions;
  autoGroupBy?: {
    disabled: boolean;
  };
  facet?: {
    rows?: {
      verticalAlign?: string;
    };
  };
  highlight?: {
    exact?: boolean;
  };
  propagationBehaviourMap?: {
    [key: string]: string[];
  };
}

export interface CanvasState {
  canvas: muze.Canvas;
  layerConfig: any;
}

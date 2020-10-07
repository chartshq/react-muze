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

// Interface for all the lifecycle hooks
export interface LifeCycleHooks {
  onInitialized?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeDraw?: Function;
  onDrawn?: Function;
  onBeforeRemove?: Function;
  onRemoved?: Function;
  onAnimationEnd?: Function;
}

// Interface for color,shape and size encoding
export interface RetinalEncoding {
  color?: string | FieldRangeInterface;
  size?: string | FieldRangeInterface;
  shape?: string | FieldRangeInterface;
}

// Color,Shape,Size legend
export interface RetinalEncodingLegend {
  colorLegend?: LegendInterface;
  sizeLegend?: LegendInterface;
  shapeLegend?: LegendInterface;
}

// Common interface between input props and actual input to muze
interface ChartProps extends LifeCycleHooks, RetinalEncoding, RetinalEncodingLegend {
  rows: string[];
  columns: string[];
  detail?: string[];
  width?: number;
  height?: number;
  operation?: Function;
  title?: string | HeadersConfig | undefined;
  subtitle?: string | HeadersConfig | undefined;
  xAxis?: LinearAxisOptions;
  yAxis?: LinearAxisOptions;
  gridLines?: GridLinesInterface;
  gridBands?: GridBandsInterface;
  scrollBar?: ScrollBarInterface;
  showHeaders?: boolean;
  className?: string;
  crossInteractive?: boolean;
  sort?: Map<string, MuzeConstants.SORT_ORDER>;
  tooltips?: Tooltip[];
  border: Border;
  radiusAxis?: RadialAxisOptions;
  propagationBehaviourMap?: {
    [key: string]: string[];
  };
  transform?: {
    [key: string]: Function;
  };
}

// Input by ReactMuze Consumer
export interface CanvasProps extends ChartProps {
  title?: string | HeadersConfig | undefined;
  subtitle?: string | HeadersConfig | undefined;
  colorScheme?: string[];
  sideEffects?: any;
  autoGroupBy?: boolean;
  facetRows?: {
    verticalAlign?: string;
  };
  highlightExact?: boolean;
}

// Actual input to muze
export interface SanitizedCanvasProps extends ChartProps {
  data: muze.DataModel;
  title?: HeadersConfig | undefined;
  subtitle?: HeadersConfig | undefined;
  legend?: LegendInterface;
  canvasSideEffects: any;
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
}

export interface CanvasState {
  canvas: muze.Canvas;
  layerConfig: any;
}

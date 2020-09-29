import { Tooltip } from "../../configurations/Tooltip";
import { AxesInterface } from '../../configurations/Axes/types';
import { LegendInterface } from '../../configurations/Legend/types';
import { ScrollBarInterface } from '../../configurations/ScrollBar/types';
import { GridBandsInterface } from '../../configurations/GridBands/types';
import { GridLinesInterface } from '../../configurations/GridLines/types';
import { FieldRangeInterface } from "../../configurations/RetinalEncoding/types";
import { HeadersConfig } from "../../configurations/Headers/types";

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
  // title?: any;
  // subtitle?: any
  xAxis?: AxesInterface;
  yAxis?: AxesInterface;
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
  // title?: any;
  // subtitle?: any
  xAxis?: AxesInterface;
  yAxis?: AxesInterface;
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
}

export interface CanvasState {
  canvas: muze.Canvas;
  layerConfig: any;
}

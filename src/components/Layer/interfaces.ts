import { AxesInterface } from "../../configurations/Axes/types";
import { GridBandsInterface } from "../../configurations/GridBands/types";
import { GridLinesInterface } from "../../configurations/GridLines/types";
import { HeadersConfig } from "../../configurations/Headers/types";
import { LegendInterface } from "../../configurations/Legend/types";
import { FieldRangeInterface } from "../../configurations/RetinalEncoding/types";
import { ScrollBarInterface } from "../../configurations/ScrollBar/types";

export interface LayerProps {
  mark?: string;
  name?: string;
  interpolate?: 'catmullRom' | 'step' | 'stepBefore' | 'stepAfter';
  className?: string;
  connectNullData?: boolean;
  encoding?: any;
  transformType?: string;
  interactionStyle?: any;
  calculateDomain?: boolean;
  source?: Function;
  interactive?: boolean;
}

export interface SanitizedConfig {
  data: muze.DataModel;
  rows: string[];
  columns: string[];
  detail: string[];
  size?: string | FieldRangeInterface;
  shape?: string | FieldRangeInterface;
  width: number;
  height: number;
  operation?: Function;
  title?: HeadersConfig;
  subtitle?: HeadersConfig;
  // title?: any;
  // subtitle?: any
  xAxis?: AxesInterface;
  yAxis?: AxesInterface;
  gridLines?: GridLinesInterface;
  gridBands?: GridBandsInterface;
  scrollBar?: ScrollBarInterface;
  showHeaders: boolean;
  className?: string;
  color: {
    field?: string | FieldRangeInterface;
    range?: string[] | null;
  }
  legend?: LegendInterface;
}

export interface CanvasState {
  canvas: muze.Canvas;
  data: muze.DataModel;
}

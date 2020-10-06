import {AxesInterface} from '../../configurations/Axes/types';
import { LegendInterface } from '../../configurations/Legend/types';
import { ScrollBarInterface } from '../../configurations/ScrollBar/types';

export interface MuzeProps {
  data: muze.DataModel;
  xAxis?: AxesInterface;
  yAxis?: AxesInterface;
  colorLegend?: LegendInterface;
  sizeLegend?: LegendInterface;
  shapeLegend?: LegendInterface;
  scrollBar?: ScrollBarInterface;
  colorScheme?: string[];
  onInitialized?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeDraw?: Function;
  onDrawn?: Function;
  onBeforeRemove?: Function;
  onRemoved?: Function;
  onAnimationEnd?: Function;
  crossInteractive?: boolean;
  sideEffects?: any;
  behaviours?: any;
}

export interface MuzeState {
  env: muze.Env | null;
  interactiveCharts: {
    [canvas: string]: muze.Canvas
  };
  allCharts: {
    [canvas: string]: muze.Canvas
  };
  propagationBehaviour: {
    [canvas: string]: muze.Canvas
  }
}

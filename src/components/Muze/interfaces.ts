import { LinearAxisOptions } from '../../configurations/Axes/types';
import { ScrollBarInterface } from '../../configurations/ScrollBar/types';
import { LifeCycleHooks, RetinalEncodingLegend } from '../types';

export interface MuzeProps extends LifeCycleHooks, RetinalEncodingLegend {
  data: muze.DataModel;
  xAxis?: LinearAxisOptions;
  yAxis?: LinearAxisOptions;
  scrollBar?: ScrollBarInterface;
  colorScheme?: string[];
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

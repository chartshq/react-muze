import { HeadersConfig } from "../../../../configurations/Headers/types";
import { LegendInterface } from "../../../../configurations/Legend/types";
import { FieldRangeInterface } from "../../../../configurations/RetinalEncoding/types";

export interface CanvasBuilderInterface {
  canvas?: muze.Canvas;
  data?: muze.DataModel | undefined;
  rows?: string[];
  columns?: string[];
  width?: number;
  height?: number;
  color?: string | FieldRangeInterface;
  size?: string | FieldRangeInterface;
  shape?: string | FieldRangeInterface;
  detail?: string[] | null;
  title?: HeadersConfig;
  subtitle?: HeadersConfig;
  config?: any;
  mount?: HTMLInputElement;
  legend?: LegendInterface;
  layers?: object[];
  onInitialized?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeDraw?: Function;
  onDrawn?: Function;
  onBeforeRemove?: Function;
  onRemoved?: Function;
  onAnimationEnd?: Function;
  sideEffectsMap?: any;
  behavioursMap?: any;
  transform?: {
    [key: string]: Function;
  };
  registerLifecyclePromises?: Function;
}

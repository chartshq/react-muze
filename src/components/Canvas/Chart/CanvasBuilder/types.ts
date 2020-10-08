import { HeadersConfig } from "../../../../configurations/Headers/types";
import { RetinalEncoding } from '../../../types';
import { ConfigInterface } from '../Config/types';

export interface CanvasBuilderInterface extends RetinalEncoding {
  canvas?: muze.Canvas;
  data?: muze.DataModel | undefined;
  rows?: string[];
  columns?: string[];
  width?: number;
  height?: number;
  detail?: string[] | null;
  title?: HeadersConfig;
  subtitle?: HeadersConfig;
  config?: ConfigInterface;
  mount?: HTMLInputElement;
  layers?: object[];
  sideEffectsMap?: any;
  behavioursMap?: any;
  transform?: {
    [key: string]: Function;
  };
}

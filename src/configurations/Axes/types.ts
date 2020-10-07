export interface LinearAxisOptions{
  name?: string;
  show?: boolean;
  showAxisName?: boolean;
  axisNamePadding?: number;
  padding?: number;
  showInnerTicks?: boolean;
  numberOfTicks?: number;
  tickFormat?: Function;
  labels?: {
    rotation: number;
  };
  interpolator?: string;
  nice?: boolean;
}

export interface RadialAxisOptions{
  range?: Function;
  domain?: number[];
}
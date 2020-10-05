type StringOrMissing = string | null | undefined;
type NumberOrMissing = number | null | undefined;
type BoolOrMissing = boolean | null | undefined;

export interface AxesInterface {
  name?: StringOrMissing;
  show?: BoolOrMissing;
  showAxisName?: BoolOrMissing;
  axisNamePadding?: NumberOrMissing;
  padding?: NumberOrMissing;
  showInnerTicks?: BoolOrMissing;
  numberOfTicks?: NumberOrMissing;
  tickFormat?: Function;
  labels?: {
    rotation: NumberOrMissing;
  };
  interpolator?: string;
  nice?: boolean;
}

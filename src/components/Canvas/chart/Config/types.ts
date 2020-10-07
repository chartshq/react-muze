import {
  LinearAxisOptions,
  RadialAxisOptions,
} from "../../../../configurations/Axes/types";
import { LegendInterface } from "../../../../configurations/Legend/types";
import { GridLinesInterface } from "../../../../configurations/GridLines/types";
import { GridBandsInterface } from "../../../../configurations/GridBands/types";
import { ScrollBarInterface } from "../../../../configurations/ScrollBar/types";
import { BorderInterface } from "../../../../configurations/Border/types";

// wouldn't it be better if it was something like
// import {AxesInterface} from "@chartshq/react-muze/configurations/Axes";

export interface ConfigInterface {
  axes?: {
    x?: LinearAxisOptions;
    y?: LinearAxisOptions;
    radius?: RadialAxisOptions;
  };
  legend?: LegendInterface;
  gridLines?: GridLinesInterface;
  gridBands?: GridBandsInterface;
  scrollBar?: ScrollBarInterface;
  showHeaders?: boolean;
  border?: BorderInterface;
  autoGroupBy?: {
    disabled: boolean;
  };
  facet?: {
    rows?: {
      verticalAlign?: string;
    };
  };
  sort?: any;
  interaction?: InteractionInterface | any;
}

export interface InteractionInterface {}

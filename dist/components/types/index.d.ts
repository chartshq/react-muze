import { TooltipInterface } from "../../configurations/Tooltip/types";
import { Border } from "../../configurations/Border";
import { LinearAxisOptions, RadialAxisOptions } from "../../configurations/Axes/types";
import { LegendInterface } from "../../configurations/Legend/types";
import { ScrollBarInterface } from "../../configurations/ScrollBar/types";
import { GridBandsInterface } from "../../configurations/GridBands/types";
import { GridLinesInterface } from "../../configurations/GridLines/types";
import { FieldRangeInterface } from "../../configurations/RetinalEncoding/types";
import { HeadersConfig } from "../../configurations/Headers/types";
import { MuzeConstants } from "../../constants";
import { LayerProps } from "../Layer/interfaces";
export interface RetinalEncoding {
    color?: string | FieldRangeInterface;
    size?: string | FieldRangeInterface;
    shape?: string | FieldRangeInterface;
}
export interface RetinalEncodingLegend {
    colorLegend?: LegendInterface;
    sizeLegend?: LegendInterface;
    shapeLegend?: LegendInterface;
}
interface ChartProps extends RetinalEncoding, RetinalEncodingLegend {
    rows: string[];
    columns: string[];
    detail?: string[];
    width?: number;
    height?: number;
    operation?: Function;
    title?: string | HeadersConfig;
    subtitle?: string | HeadersConfig;
    xAxis?: LinearAxisOptions;
    yAxis?: LinearAxisOptions;
    gridLines?: GridLinesInterface;
    gridBands?: GridBandsInterface;
    scrollBar?: ScrollBarInterface;
    showHeaders?: boolean;
    className?: string;
    crossInteractive?: boolean;
    sort?: Map<string, MuzeConstants.SORT_ORDER>;
    tooltips?: Array<TooltipInterface>;
    border: Border;
    radiusAxis?: RadialAxisOptions;
    propagationBehaviourMap?: {
        [key: string]: string[];
    };
    transform?: {
        [key: string]: Function;
    };
}
export interface CanvasProps extends ChartProps {
    colorScheme?: string[];
    sideEffects?: any;
    autoGroupBy?: boolean;
    facetRows?: {
        verticalAlign?: string;
    };
    highlightExact?: boolean;
}
export interface SanitizedCanvasProps extends ChartProps {
    title?: HeadersConfig;
    subtitle?: HeadersConfig;
    data: muze.DataModel;
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
    layerConfig: {
        [id: string]: LayerProps;
    };
}
export {};

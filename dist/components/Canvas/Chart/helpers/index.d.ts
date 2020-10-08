import { CanvasProps, SanitizedCanvasProps } from "../../../types";
import { LegendInterface } from "../../../../configurations/Legend/types";
export declare const getLegendConfig: (legendConfig: LegendInterface, legendType: string) => any;
export declare const configSanitizer: (config: CanvasProps, context: any) => SanitizedCanvasProps;

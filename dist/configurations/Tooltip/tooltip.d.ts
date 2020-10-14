import { TooltipInterface, TooltipType, TooltipMode } from "./types";
declare class Tooltip {
    private _config;
    private constructor();
    static config(): Tooltip;
    on(type: TooltipType): Tooltip;
    mode(mode: TooltipMode): Tooltip;
    formatter(func: Function): Tooltip;
    displayFields(fields: Array<String>): Tooltip;
    create(options?: TooltipInterface): TooltipInterface;
}
export declare function resolveMultiTooltips(tooltips: Array<TooltipInterface> | undefined): {
    mode?: TooltipMode | undefined;
    formatter?: Function | undefined;
    displayFields?: String[] | undefined;
    highlightSummary?: TooltipInterface | undefined;
    selectionSummary?: TooltipInterface | undefined;
    _type?: TooltipType | undefined;
} | null;
export { Tooltip, TooltipType as TOOLTIP_TYPE, TooltipMode as TOOLTIP_MODE };

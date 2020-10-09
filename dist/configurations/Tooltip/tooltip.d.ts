import { TooltipInterface, MuzeTooltipInputInterface, TooltipType, TooltipMode } from './types';
declare class Tooltip {
    _type: TooltipType;
    _mode: TooltipMode;
    _formatter?: Function;
    _displayFields?: Array<String>;
    constructor({ type, mode, formatter, displayFields }: TooltipInterface);
    static config(): Tooltip;
    mode(mode: TooltipMode): Tooltip;
    on(type: TooltipType): Tooltip;
    formatter(func: Function): Tooltip;
    displayFields(fields: Array<String>): Tooltip;
    create(values?: TooltipInterface): Tooltip;
    asMuzeInput(): MuzeTooltipInputInterface;
}
export declare function multiTooltipIntoMuze(tooltips: Array<Tooltip> | undefined): {
    tooltip?: undefined;
} | {
    tooltip: {
        highlightSummary: MuzeTooltipInputInterface;
        selectionSummary: MuzeTooltipInputInterface;
    };
} | {
    tooltip: {
        highlightSummary: MuzeTooltipInputInterface;
        selectionSummary?: undefined;
    };
} | {
    tooltip: {
        selectionSummary: MuzeTooltipInputInterface | undefined;
        highlightSummary?: undefined;
    };
};
export { Tooltip, TooltipType as TOOLTIP_TYPE, TooltipMode as TOOLTIP_MODE };

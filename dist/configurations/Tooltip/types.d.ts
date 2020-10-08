export interface TooltipInterface {
    type?: TooltipType;
    mode?: TooltipMode;
    formatter?: Function;
    displayFields?: Array<String>;
}
export interface MuzeTooltipInputInterface {
    mode?: String;
    formatter?: Function;
    displayFields?: Array<String>;
}
export declare enum TooltipType {
    HIGHLIGHT = "highlight",
    SELECT = "select"
}
export declare enum TooltipMode {
    FRAGMENTED = "fragmented",
    CONSOLIDATED = "consolidated"
}

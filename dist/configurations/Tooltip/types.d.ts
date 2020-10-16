export interface TooltipInterface {
    mode?: TooltipMode;
    formatter?: Function;
    displayFields?: Array<String>;
    highlightSummary?: TooltipInterface;
    selectionSummary?: TooltipInterface;
    _type?: TooltipType;
}
export declare enum TooltipType {
    HIGHLIGHT = "highlight",
    SELECT = "select"
}
export declare enum TooltipMode {
    FRAGMENTED = "fragmented",
    CONSOLIDATED = "consolidated"
}

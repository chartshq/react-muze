export interface TooltipInterface {
  mode?: TooltipMode;
  formatter?: Function;
  displayFields?: Array<String>;
  highlightSummary?: TooltipInterface;
  selectionSummary?: TooltipInterface;
  _type?: TooltipType;
}

export enum TooltipType {
  HIGHLIGHT = "highlight",
  SELECT = "select",
}

export enum TooltipMode {
  FRAGMENTED = "fragmented",
  CONSOLIDATED = "consolidated",
}

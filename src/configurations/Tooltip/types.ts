
export interface TooltipInterface {
  on?: TooltipType,
  mode?: TooltipMode;
  formatter?: Function;
  displayFields?: Array<String>;
}

export interface MuzeTooltipInputInterface {
  mode?: String;
  formatter?: Function;
  displayFields?: Array<String>;
}

export enum TooltipType {
  HIGHLIGHT = 'highlight',
  SELECT = 'select'
};

export enum TooltipMode {
  FRAGMENTED = 'fragmented',
  CONSOLIDATED = 'consolidated'
};

// MuzeTooltipInputInterface
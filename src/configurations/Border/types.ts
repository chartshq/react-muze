import { BORDER_POSITION, BORDER_STYLE } from "../../constants/muze/border";

export interface BorderInterface {
  rows?: MuzeBorderRegionInterface;
  columns?: MuzeBorderRegionInterface;
  values?: MuzeBorderRegionInterface;
  width?: Number;
  style?: BORDER_STYLE;
  color?: String;
}

export interface MuzeBorderRegionInterface {
  [BORDER_POSITION.TOP]: Boolean;
  [BORDER_POSITION.BOTTOM]: Boolean;
  [BORDER_POSITION.RIGHT]: Boolean;
  [BORDER_POSITION.LEFT]: Boolean;
}

export interface MuzeBorderInputInterface {
  width?: Number;
  style?: BORDER_STYLE;
  color?: String;
  showColBorders?: MuzeBorderRegionInterface;
  showValueBorders?: MuzeBorderRegionInterface;
  showRowBorders?: MuzeBorderRegionInterface;
}

export { BORDER_POSITION, BORDER_STYLE };
import { BORDER_POSITION, BORDER_STYLE } from "../../constants/muze/border";

export interface BorderInterface {
  showRowBorders?: MuzeBorderRegionInterface;
  showColBorders?: MuzeBorderRegionInterface;
  showValueBorders?: MuzeBorderRegionInterface;
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

export { BORDER_POSITION, BORDER_STYLE };
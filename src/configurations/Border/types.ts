import { BORDER_POSITION, BORDER_STYLE } from "../../constants/muze/border";

export interface BorderInterface {
  positions?: MuzeBorderPositionsInterface;
  width?: Number;
  style?: BORDER_STYLE;
  color?: String;
}

export interface MuzeBorderPositionsInterface {
  [BORDER_POSITION.TOP]: Boolean;
  [BORDER_POSITION.BOTTOM]: Boolean;
  [BORDER_POSITION.RIGHT]: Boolean;
  [BORDER_POSITION.LEFT]: Boolean;
}

export interface MuzeBorderInputInterface {
  width?: Number;
  style?: BORDER_STYLE;
  color?: String;
  showColBorders?: MuzeBorderPositionsInterface;
  showValueBorders?: MuzeBorderPositionsInterface;
  showRowBorders?: MuzeBorderPositionsInterface;
}

export { BORDER_POSITION, BORDER_STYLE };
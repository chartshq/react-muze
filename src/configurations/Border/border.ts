import {
  BorderInterface,
  MuzeBorderInputInterface,
  BORDER_STYLE,
  MuzeBorderRegionInterface,
} from "./types";

class Border {
  _width: Number = 1;
  _style: BORDER_STYLE = BORDER_STYLE.SOLID;
  _color: String = "#000000";

  _rowsPositions: MuzeBorderRegionInterface | null = null;
  _columnsPositions: MuzeBorderRegionInterface | null = null;
  _valuesPositions: MuzeBorderRegionInterface | null = null;

  constructor({ showRowBorders, showColBorders, showValueBorders, width, style, color }: BorderInterface) {
    if (width) this._width = width;
    if (style) this._style = style;
    if (color) this._color = color;
    if (showRowBorders) this._rowsPositions = showRowBorders;
    if (showColBorders) this._columnsPositions = showColBorders;
    if (showValueBorders) this._valuesPositions = showValueBorders;
  }

  static config(): Border {
    return new Border({});
  }

  onRows(region: MuzeBorderRegionInterface): Border {
    this._rowsPositions = region;
    return this;
  }

  onColumns(region: MuzeBorderRegionInterface): Border {
    this._columnsPositions = region;
    return this;
  }

  onValues(region: MuzeBorderRegionInterface): Border {
    this._valuesPositions = region;
    return this;
  }

  width(width: Number): Border {
    this._width = width;
    return this;
  }

  style(style: BORDER_STYLE): Border {
    this._style = style;
    return this;
  }

  color(color: String): Border {
    this._color = color;
    return this;
  }

  create(vals?: BorderInterface): Border {
    if (!vals) {
      return this;
    }

    const { showRowBorders, showColBorders, showValueBorders, width, style, color } = vals;

    if (width) this._width = width;
    if (style) this._style = style;
    if (color) this._color = color;
    if (showRowBorders) this._rowsPositions = showRowBorders;
    if (showColBorders) this._columnsPositions = showColBorders;
    if (showValueBorders) this._valuesPositions = showValueBorders;

    return this;
  }

  intoMuzeInput(): MuzeBorderInputInterface {
    let muzeInput: MuzeBorderInputInterface = {};

    if (this._width) muzeInput.width = this._width;
    if (this._style) muzeInput.style = this._style;
    if (this._color) muzeInput.color = this._color;

    if (this._rowsPositions) {
      muzeInput.showRowBorders = this._rowsPositions;
    }

    if (this._columnsPositions) {
      muzeInput.showColBorders = this._columnsPositions;
    }

    if (this._valuesPositions) {
      muzeInput.showValueBorders = this._valuesPositions;
    }

    return muzeInput;
  }
}

export default Border;

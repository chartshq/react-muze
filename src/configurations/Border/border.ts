import {
  BorderInterface,
  MuzeBorderInputInterface,
  MuzeBorderPositionsInterface,
  BORDER_POSITION,
  BORDER_STYLE,
  // SHOW_BORDER_ON,
} from "./types";

class Border {
  _positions: MuzeBorderPositionsInterface | null = null;
  _width: Number = 1;
  _style: BORDER_STYLE = BORDER_STYLE.SOLID;
  _color: String = "#000000";

  constructor({ positions, width, style, color }: BorderInterface) {
    if (positions) this._positions = positions;
    if (width) this._width = width;
    if (style) this._style = style;
    if (color) this._color = color;
  }

  static config(): Border {
    return new Border({});
  }

  position(position?: BORDER_POSITION): Border {
    if (this._positions === null) {
      this._positions = {
        [BORDER_POSITION.TOP]: false,
        [BORDER_POSITION.BOTTOM]: false,
        [BORDER_POSITION.RIGHT]: false,
        [BORDER_POSITION.LEFT]: false,
      };
    }

    if (position) this._positions[position] = true;

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

  create(values?: BorderInterface): Border {
    if (!values) {
      return this;
    }

    const { positions, width, style, color } = values;

    if (positions) this._positions = positions;
    if (width) this._width = width;
    if (style) this._style = style;
    if (color) this._color = color;

    return this;
  }

  intoMuzeInput(): MuzeBorderInputInterface {
    let muzeInput: MuzeBorderInputInterface = {};

    if (this._width) muzeInput.width = this._width;
    if (this._style) muzeInput.style = this._style;
    if (this._color) muzeInput.color = this._color;

    if (this._positions) {
      muzeInput.showColBorders = this._positions;
      muzeInput.showValueBorders = this._positions;
      muzeInput.showRowBorders = this._positions;
    }

    return muzeInput;
  }
}

export default Border;

import {
  BorderInterface,
  MuzeBorderInputInterface,
  BORDER_STYLE,
  MuzeBorderRegionInterface,
} from "./types";
import { BorderBase } from "./base";
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class Border {
  _width?: BorderInterface["width"]
  _style?: BorderInterface["style"]
  _color?: BorderInterface["color"]
  _showRowBorders?: BorderInterface["showRowBorders"]
  _showColBorders?: BorderInterface["showColBorders"]
  _showValueBorders?: BorderInterface["showValueBorders"]

  constructor({ showRowBorders, showColBorders, showValueBorders, width, style, color }: BorderInterface) {
    this._width = width;
    this._style = style;
    this._color = color;
    this._showColBorders = showRowBorders;
    this._showValueBorders = showColBorders;
    this._showRowBorders = showValueBorders;
  }

  static config(): Border {
    return new Border({});
  }

  showRowBorders(region: MuzeBorderRegionInterface): Border {
    this._showRowBorders = region;
    return this;
  }

  showColBorders(region: MuzeBorderRegionInterface): Border {
    this._showColBorders = region;
    return this;
  }

  showValueBorders(region: MuzeBorderRegionInterface): Border {
    this._showValueBorders = region;
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

  create(value?: BorderInterface): Border {
    inputSanitizer(value, this);
    return removeUndefinedValues(new BorderBase(this));
  }
}

export default Border;

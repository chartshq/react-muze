import {
  BorderInterface,
  BORDER_STYLE,
  MuzeBorderRegionInterface,
} from "./types";

class Border {
  private _config : BorderInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Border {
    return new Border();
  }

  showRowBorders(region: MuzeBorderRegionInterface): Border {
    this._config.showRowBorders = region;
    return this;
  }

  showColBorders(region: MuzeBorderRegionInterface): Border {
    this._config.showColBorders = region;
    return this;
  }

  showValueBorders(region: MuzeBorderRegionInterface): Border {
    this._config.showValueBorders = region;
    return this;
  }

  width(width: Number): Border {
    this._config.width = width;
    return this;
  }

  style(style: BORDER_STYLE): Border {
    this._config.style = style;
    return this;
  }

  color(color: String): Border {
    this._config.color = color;
    return this;
  }

  create(options: BorderInterface = {}): BorderInterface {
    return { ...this._config ,...options};
  }
}

export { Border };

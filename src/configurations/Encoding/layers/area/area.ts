import { AreaEncodingConfigInterface, AreaEncodingInterface } from './types';

class AreaLayerEncoding {
  private _config : AreaEncodingConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): AreaLayerEncoding {
    return new AreaLayerEncoding();
  }

  color(color: AreaEncodingInterface['color']): AreaLayerEncoding {
    this._config.color = color;
    return this;
  }

  x(x: AreaEncodingInterface['x']): AreaLayerEncoding {
    if (x) {
      this._config.x = {
        field: x
      };
    }
    return this;
  }

  y(y: AreaEncodingInterface['y']): AreaLayerEncoding {
    if (y) {
      this._config.y = {
        field: y
      };
    }
    return this;
  }

  y0(y0: AreaEncodingInterface['y0']): AreaLayerEncoding {
    if (y0) {
      this._config.y0 = {
        field: y0
      };
    }
    return this;
  }

  strokeOpacity(strokeOpacity: AreaEncodingInterface['strokeOpacity']): AreaLayerEncoding {
    this._config.strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: AreaEncodingInterface['fillOpacity']): AreaLayerEncoding {
    this._config.fillOpacity = fillOpacity;
    return this;
  }

  create(options: AreaEncodingConfigInterface = {}): AreaEncodingConfigInterface {
    return { ...this._config ,...options};
  }
}

export { AreaLayerEncoding };

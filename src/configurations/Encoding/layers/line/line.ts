import { LineEncodingInterface, LineEncodingBaseInterface } from './types';

class LineLayerEncoding {
  private _config : LineEncodingBaseInterface;

  private constructor() {
    this._config = {};
  }

  static config(): LineLayerEncoding {
    return new LineLayerEncoding();
  }

  color(color: LineEncodingInterface['color']): LineLayerEncoding {
    this._config.color = color;
    return this;
  }

  x(x: LineEncodingInterface['x']): LineLayerEncoding {
    if (x) {
      this._config.x = {
        field: x
      };
    }
    return this;
  }

  y(y: LineEncodingInterface['y']): LineLayerEncoding {
    if (y) {
      this._config.y = {
        field: y
      };
    }
    return this;
  }

  strokeOpacity(strokeOpacity: LineEncodingInterface['strokeOpacity']): LineLayerEncoding {
    this._config.strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: LineEncodingInterface['fillOpacity']): LineLayerEncoding {
    this._config.fillOpacity = fillOpacity;
    return this;
  }

  strokeWidth(strokeWidth: LineEncodingInterface['strokeWidth']): LineLayerEncoding {
    this._config.strokeWidth = strokeWidth;
    return this;
  }

  create(options: LineEncodingBaseInterface = {}): LineEncodingBaseInterface {
    return { ...this._config ,...options};
  }
}

export { LineLayerEncoding };

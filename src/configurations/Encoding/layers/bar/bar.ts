import { BarEncodingInterface, BarEncodingBaseInterface } from './types';

class BarLayerEncoding {
  private _config : BarEncodingBaseInterface;

  private constructor() {
    this._config = {};
  }

  static config(): BarLayerEncoding {
    return new BarLayerEncoding();
  }

  color(color: BarEncodingInterface['color']): BarLayerEncoding {
    this._config.color = color;
    return this;
  }

  x(x: BarEncodingInterface['x']): BarLayerEncoding {
    if (x !== undefined) {
      this._config.x = {
        field: x
      };
    }
    return this;
  }

  y(y: BarEncodingInterface['y']): BarLayerEncoding {
    if (y !== undefined) {
      this._config.y = {
        field: y
      };
    }
    return this;
  }

  x0(x0: BarEncodingInterface['x0']): BarLayerEncoding {
    if (x0 !== undefined) {
      this._config.x0 ={
        field: x0
      };
    }
    return this;
  }

  y0(y0: BarEncodingInterface['y0']): BarLayerEncoding {
    if (y0 !== undefined) {
      this._config.y0 ={
        field: y0
      };
    }
    return this;
  }

  stroke(stroke: BarEncodingInterface['stroke']): BarLayerEncoding {
    this._config.stroke = stroke;
    return this;
  }

  strokeWidth(strokeWidth: BarEncodingInterface['strokeWidth']): BarLayerEncoding {
    this._config.strokeWidth = strokeWidth;
    return this;
  }

  strokePosition(strokePosition: BarEncodingInterface['strokePosition']): BarLayerEncoding {
    this._config.strokePosition = strokePosition;
    return this;
  }

  create(options: BarEncodingBaseInterface = {}): BarEncodingBaseInterface {
    return { ...this._config ,...options};
  }
}

export { BarLayerEncoding };

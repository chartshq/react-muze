import { PointEncodingInterface, PointEncodingBaseInterface } from './types';

class PointLayerEncoding {
  private _config : PointEncodingBaseInterface;

  private constructor() {
    this._config = {};
  }

  static config(): PointLayerEncoding {
    return new PointLayerEncoding();
  }

  size(size: PointEncodingInterface['size']): PointLayerEncoding {
    this._config.size = size;
    return this;
  }

  color(color: PointEncodingInterface['color']): PointLayerEncoding {
    this._config.color = color;
    return this;
  }

  stroke(stroke: PointEncodingInterface['stroke']): PointLayerEncoding {
    this._config.stroke = stroke;
    return this;
  }

  strokeWidth(strokeWidth: PointEncodingInterface['strokeWidth']): PointLayerEncoding {
    this._config.strokeWidth = strokeWidth;
    return this;
  }

  fill(fill: PointEncodingInterface['fill']): PointLayerEncoding {
    this._config.fill = fill;
    return this;
  }
  
  shape(shape: PointEncodingInterface['shape']): PointLayerEncoding {
    this._config.shape = shape;
    return this;
  }

  x(x: PointEncodingInterface['x']): PointLayerEncoding {
    this._config.x = {
      field: x
    }
    return this;
  }

  y(y: PointEncodingInterface['y']): PointLayerEncoding {
    this._config.y = {
      field: y
    }
    return this;
  }

  strokeOpacity(strokeOpacity: PointEncodingInterface['strokeOpacity']): PointLayerEncoding {
    this._config.strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: PointEncodingInterface['fillOpacity']): PointLayerEncoding {
    this._config.fillOpacity = fillOpacity;
    return this;
  }

  strokePosition(strokePosition: PointEncodingInterface['strokePosition']): PointLayerEncoding {
    this._config.strokePosition = strokePosition;
    return this;
  }

  interaction(interaction: PointEncodingInterface['interaction']): PointLayerEncoding {
    this._config.interaction = interaction;
    return this;
  }

  create(options: PointEncodingBaseInterface = {}): PointEncodingBaseInterface {
    return { ...this._config ,...options};
  }
}

export { PointLayerEncoding };

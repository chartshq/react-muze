import { PointBaseEncoding } from './base';
import { PointEncodingInterface } from './types';

class PointLayerEncoding {
  isClass: boolean;
  
  _size?: PointEncodingInterface['size'];

  _color?: PointEncodingInterface['color'];

  _stroke?: PointEncodingInterface['stroke'];

  _strokeWidth?: PointEncodingInterface['strokeWidth'];

  _fill?: PointEncodingInterface['fill'];

  _shape: PointEncodingInterface['shape'];

  _x: PointEncodingInterface['x'];

  _y: PointEncodingInterface['y'];

  _strokeOpacity?: PointEncodingInterface['strokeOpacity'];

  _fillOpacity?: PointEncodingInterface['fillOpacity']

  _strokePosition?: PointEncodingInterface['strokePosition'];

  _interaction?: PointEncodingInterface['interaction'];

  constructor({
    size,
    color,
    stroke,
    strokeWidth,
    fill,
    shape,
    x,
    y,
    strokeOpacity,
    fillOpacity,
    strokePosition,
    interaction
  }: PointEncodingInterface) {
    this.isClass = true;
    this._size = size;
    this._color = color;
    this._stroke = stroke;
    this._strokeWidth = strokeWidth;
    this._fill = fill;
    this._shape = shape;
    this._x = x;
    this._y = y;
    this._strokeOpacity = strokeOpacity;
    this._fillOpacity = fillOpacity;
    this._strokePosition = strokePosition;
    this._interaction = interaction;
  }

  static config(): PointLayerEncoding {
    return new PointLayerEncoding({});
  }

  size(size: PointEncodingInterface['size']): PointLayerEncoding {
    this._size = size;
    return this;
  }

  color(color: PointEncodingInterface['color']): PointLayerEncoding {
    this._color = color;
    return this;
  }

  stroke(stroke: PointEncodingInterface['stroke']): PointLayerEncoding {
    this._stroke = stroke;
    return this;
  }

  strokeWidth(strokeWidth: PointEncodingInterface['strokeWidth']): PointLayerEncoding {
    this._strokeWidth = strokeWidth;
    return this;
  }

  fill(fill: PointEncodingInterface['fill']): PointLayerEncoding {
    this._fill = fill;
    return this;
  }
  
  shape(shape: PointEncodingInterface['shape']): PointLayerEncoding {
    this._shape = shape;
    return this;
  }

  x(x: PointEncodingInterface['x']): PointLayerEncoding {
    this._x = x;
    return this;
  }

  y(y: PointEncodingInterface['y']): PointLayerEncoding {
    this._y = y;
    return this;
  }

  strokeOpacity(strokeOpacity: PointEncodingInterface['strokeOpacity']): PointLayerEncoding {
    this._strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: PointEncodingInterface['fillOpacity']): PointLayerEncoding {
    this._fillOpacity = fillOpacity;
    return this;
  }

  strokePosition(strokePosition: PointEncodingInterface['strokePosition']): PointLayerEncoding {
    this._strokePosition = strokePosition;
    return this;
  }

  interaction(interaction: PointEncodingInterface['interaction']): PointLayerEncoding {
    this._interaction = interaction;
    return this;
  }

  create(value?: PointEncodingInterface): any {
    const result: any = value ? new PointBaseEncoding(value) : new PointBaseEncoding(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { PointLayerEncoding };

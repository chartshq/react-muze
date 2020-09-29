import { ArcBaseEncoding } from './base';
import { ArcEncodingInterface } from './types';

class ArcLayerEncoding {
  isClass: boolean;

  _strokeWidth?: ArcEncodingInterface['strokeWidth'];

  _strokeLinejoin?: ArcEncodingInterface['strokeLinejoin'];

  _angle?: ArcEncodingInterface['angle'];

  _radius?: ArcEncodingInterface['radius'];

  _opacity?: ArcEncodingInterface['opacity'];

  _color?: ArcEncodingInterface['color'];

  _shape?: ArcEncodingInterface['shape'];

  _size?: ArcEncodingInterface['size'];
  
  constructor({
    strokeWidth,
    strokeLinejoin,
    angle,
    radius,
    opacity,
    color,
    shape,
    size,
  }: ArcEncodingInterface) {
    this.isClass = true;
    this._strokeWidth = strokeWidth;
    this._strokeLinejoin = strokeLinejoin;
    this._angle = angle;
    this._radius = radius;
    this._opacity = opacity;
    this._color = color;
    this._shape = shape;
    this._size = size;
  }

  static config(): ArcLayerEncoding {
    return new ArcLayerEncoding({});
  }

  strokeWidth(strokeWidth: ArcEncodingInterface['strokeWidth']): ArcLayerEncoding {
    this._strokeWidth = strokeWidth;
    return this;
  }

  strokeLinejoin(strokeLinejoin: ArcEncodingInterface['strokeLinejoin']): ArcLayerEncoding {
    this._strokeLinejoin = strokeLinejoin;
    return this;
  }

  angle(angle: ArcEncodingInterface['angle']): ArcLayerEncoding {
    this._angle = angle;
    return this;
  }

  radius(radius: ArcEncodingInterface['radius']): ArcLayerEncoding {
    this._radius = radius;
    return this;
  }

  opacity(opacity: ArcEncodingInterface['opacity']): ArcLayerEncoding {
    this._opacity = opacity;
    return this;
  }

  color(color: ArcEncodingInterface['color']): ArcLayerEncoding {
    this._color = color;
    return this;
  }

  shape(shape: ArcEncodingInterface['shape']): ArcLayerEncoding {
    this._shape = shape;
    return this;
  }

  size(size: ArcEncodingInterface['size']): ArcLayerEncoding {
    this._size = size;
    return this;
  }

  create(value?: ArcEncodingInterface): any {
    const result: any = value ? new ArcBaseEncoding(value) : new ArcBaseEncoding(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { ArcLayerEncoding };

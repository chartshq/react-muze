import { LineBaseEncoding } from './base';
import { LineEncodingInterface } from './types';
import { inputSanitizer, removeUndefinedValues } from '../../../../utils/input-sanitizer';

class LineLayerEncoding {
  _color: LineEncodingInterface['color'];

  _x: LineEncodingInterface['x'];

  _y: LineEncodingInterface['y'];

  _strokeOpacity: LineEncodingInterface['strokeOpacity'];

  _fillOpacity: LineEncodingInterface['fillOpacity']

  _strokeWidth: LineEncodingInterface['strokeWidth'];

  constructor({
    color,
    x,
    y,
    strokeOpacity,
    fillOpacity,
    strokeWidth
  }: LineEncodingInterface) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._strokeOpacity = strokeOpacity;
    this._fillOpacity = fillOpacity;
    this._strokeWidth = strokeWidth;
  }

  static config(): LineLayerEncoding {
    return new LineLayerEncoding({ color: {} });
  }

  color(color: LineEncodingInterface['color']): LineLayerEncoding {
    this._color = color;
    return this;
  }

  x(x: LineEncodingInterface['x']): LineLayerEncoding {
    this._x = x;
    return this;
  }

  y(y: LineEncodingInterface['y']): LineLayerEncoding {
    this._y = y;
    return this;
  }

  strokeOpacity(strokeOpacity: LineEncodingInterface['strokeOpacity']): LineLayerEncoding {
    this._strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: LineEncodingInterface['fillOpacity']): LineLayerEncoding {
    this._fillOpacity = fillOpacity;
    return this;
  }

  strokeWidth(strokeWidth: LineEncodingInterface['strokeWidth']): LineLayerEncoding {
    this._strokeWidth = strokeWidth;
    return this;
  }

  create(value?: LineEncodingInterface): any {
    inputSanitizer(value, this);

    return removeUndefinedValues(new LineBaseEncoding(this));
  }
}

export { LineLayerEncoding };

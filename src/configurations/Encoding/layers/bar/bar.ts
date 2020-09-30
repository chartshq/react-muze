import { BarBaseEncoding } from './base';
import { BarEncodingInterface } from './types';
import { inputSanitizer, removeUndefinedValues } from '../../../../utils/input-sanitizer';

class BarLayerEncoding {
  _color: BarEncodingInterface['color'];

  _x: BarEncodingInterface['x'];

  _y: BarEncodingInterface['y'];

  _x0: BarEncodingInterface['x0'];

  _y0: BarEncodingInterface['y0'];

  _stroke: BarEncodingInterface['stroke'];

  _strokeWidth: BarEncodingInterface['strokeWidth']

  _strokePosition: BarEncodingInterface['strokePosition'];

  constructor({
    color,
    x,
    y,
    x0,
    y0
  }: BarEncodingInterface) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
  }

  static config(): BarLayerEncoding {
    return new BarLayerEncoding({ color: {} });
  }

  color(color: BarEncodingInterface['color']): BarLayerEncoding {
    this._color = color;
    return this;
  }

  x(x: BarEncodingInterface['x']): BarLayerEncoding {
    this._x = x;
    return this;
  }

  y(y: BarEncodingInterface['y']): BarLayerEncoding {
    this._y = y;
    return this;
  }

  x0(x0: BarEncodingInterface['x0']): BarLayerEncoding {
    this._x0 = x0;
    return this;
  }

  y0(y0: BarEncodingInterface['y0']): BarLayerEncoding {
    this._y0 = y0;
    return this;
  }

  stroke(stroke: BarEncodingInterface['stroke']): BarLayerEncoding {
    this._stroke = stroke;
    return this;
  }

  strokeWidth(strokeWidth: BarEncodingInterface['strokeWidth']): BarLayerEncoding {
    this._strokeWidth = strokeWidth;
    return this;
  }

  strokePosition(strokePosition: BarEncodingInterface['strokePosition']): BarLayerEncoding {
    this._strokePosition = strokePosition;
    return this;
  }

  create(value?: BarEncodingInterface): any {
    inputSanitizer(value, this);

    return removeUndefinedValues(new BarBaseEncoding(this));
  }
}

export { BarLayerEncoding };

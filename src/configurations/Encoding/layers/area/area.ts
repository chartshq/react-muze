import { AreaBaseEncoding } from './base';
import { AreaEncodingInterface } from './types';
import { inputSanitizer, removeUndefinedValues } from '../../../../utils/input-sanitizer';

class AreaLayerEncoding {
  _color: AreaEncodingInterface['color'];

  _x: AreaEncodingInterface['x'];

  _y: AreaEncodingInterface['y'];

  _y0: AreaEncodingInterface['y0'];

  _strokeOpacity: AreaEncodingInterface['strokeOpacity'];

  _fillOpacity: AreaEncodingInterface['fillOpacity']

  constructor({
    color,
    x,
    y,
    y0,
    strokeOpacity,
    fillOpacity
  }: AreaEncodingInterface) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._y0 = y0;
    this._strokeOpacity = strokeOpacity;
    this._fillOpacity = fillOpacity;
  }

  static config(): AreaLayerEncoding {
    return new AreaLayerEncoding({ color: {} });
  }

  color(color: AreaEncodingInterface['color']): AreaLayerEncoding {
    this._color = color;
    return this;
  }

  x(x: AreaEncodingInterface['x']): AreaLayerEncoding {
    this._x = x;
    return this;
  }

  y(y: AreaEncodingInterface['y']): AreaLayerEncoding {
    this._y = y;
    return this;
  }

  y0(y0: AreaEncodingInterface['y0']): AreaLayerEncoding {
    this._y0 = y0;
    return this;
  }

  strokeOpacity(strokeOpacity: AreaEncodingInterface['strokeOpacity']): AreaLayerEncoding {
    this._strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: AreaEncodingInterface['fillOpacity']): AreaLayerEncoding {
    this._fillOpacity = fillOpacity;
    return this;
  }

  create(value?: AreaEncodingInterface): any {
    const refinedValues = inputSanitizer(value);

    return removeUndefinedValues(new AreaBaseEncoding(refinedValues || this));
  }
}

export { AreaLayerEncoding };

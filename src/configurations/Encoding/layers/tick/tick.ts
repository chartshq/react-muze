import { TickBaseEncoding } from './base';
import { TickEncodingInterface } from './types';
import { inputSanitizer, removeUndefinedValues } from '../../../../utils/input-sanitizer';

class TickLayerEncoding {
  _color: TickEncodingInterface['color'];

  _x: TickEncodingInterface['x'];

  _y: TickEncodingInterface['y'];

  _x0: TickEncodingInterface['x0'];

  _y0: TickEncodingInterface['y0'];

  _radius: TickEncodingInterface['radius'];

  _radius0: TickEncodingInterface['radius0']

  _angle: TickEncodingInterface['angle'];

  _angle0: TickEncodingInterface['angle0'];

  _strokeOpacity: TickEncodingInterface['strokeOpacity'];
  
  _fillOpacity: TickEncodingInterface['fillOpacity'];

  constructor({
    color,
    x,
    y,
    x0,
    y0,
    radius,
    radius0,
    angle,
    angle0,
    strokeOpacity,
    fillOpacity
  }: TickEncodingInterface) {
    this._color = color;
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._radius = radius;
    this._radius0 = radius0;
    this._angle = angle;
    this._angle0 = angle0;
    this._strokeOpacity = strokeOpacity;
    this._fillOpacity = fillOpacity;
  }

  static config(): TickLayerEncoding {
    return new TickLayerEncoding({ color: {} });
  }

  color(color: TickEncodingInterface['color']): TickLayerEncoding {
    this._color = color;
    return this;
  }

  x(x: TickEncodingInterface['x']): TickLayerEncoding {
    this._x = x;
    return this;
  }

  y(y: TickEncodingInterface['y']): TickLayerEncoding {
    this._y = y;
    return this;
  }

  x0(x0: TickEncodingInterface['x0']): TickLayerEncoding {
    this._x0 = x0;
    return this;
  }

  y0(y0: TickEncodingInterface['y0']): TickLayerEncoding {
    this._y0 = y0;
    return this;
  }

  radius(radius: TickEncodingInterface['radius']): TickLayerEncoding {
    this._radius = radius;
    return this;
  }

  radius0(radius0: TickEncodingInterface['radius0']): TickLayerEncoding {
    this._radius0 = radius0;
    return this;
  }

  angle(angle: TickEncodingInterface['angle']): TickLayerEncoding {
    this._angle = angle;
    return this;
  }

  angle0(angle0: TickEncodingInterface['angle0']): TickLayerEncoding {
    this._angle0 = angle0;
    return this;
  }

  strokeOpacity(strokeOpacity: TickEncodingInterface['strokeOpacity']): TickLayerEncoding {
    this._strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: TickEncodingInterface['fillOpacity']): TickLayerEncoding {
    this._fillOpacity = fillOpacity;
    return this;
  }

  create(value?: TickEncodingInterface): any {
    const refinedValues = inputSanitizer(value);

    return removeUndefinedValues(new TickBaseEncoding(refinedValues || this));
  }
}

export { TickLayerEncoding };

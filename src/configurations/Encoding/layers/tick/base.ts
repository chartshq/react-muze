import { TickEncodingBaseInterface } from './types';

class TickBaseEncoding {
  color?: TickEncodingBaseInterface['color'];
  x?: TickEncodingBaseInterface['x'];
  y?: TickEncodingBaseInterface['y'];
  x0?: TickEncodingBaseInterface['x0'];
  y0?: TickEncodingBaseInterface['y0'];
  radius?: TickEncodingBaseInterface['radius'];
  radius0?: TickEncodingBaseInterface['radius0'];
  angle?: TickEncodingBaseInterface['angle'];
  angle0?: TickEncodingBaseInterface['angle0'];
  strokeOpacity?: TickEncodingBaseInterface['strokeOpacity'];
  fillOpacity?: TickEncodingBaseInterface['fillOpacity'];

  constructor(builder: any) {
    this.color = builder._color;
    this.x = {
      field: builder._x
    };
    this.y = {
      field: builder._y
    };
    this.x0 = {
      field: builder._x0
    };
    this.y0 = {
      field: builder._y0
    };
    this.radius = builder._radius;
    this.radius0 = builder._radius0;
    this.angle = builder._angle;
    this.angle0 = builder._angle0;
    this.strokeOpacity = builder._strokeOpacity;
    this.fillOpacity = builder._fillOpacity;
  }
}

export { TickBaseEncoding };

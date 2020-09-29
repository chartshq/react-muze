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
    this.color = builder.isClass ? builder._color : builder.color;
    this.x = {
      field: builder.isClass ? builder._x : builder.x
    };
    this.y = {
      field: builder.isClass ? builder._y : builder.y
    };
    this.x0 = {
      field: builder.isClass ? builder._x0 : builder.x0
    };
    this.y0 = {
      field: builder.isClass ? builder._y0 : builder.y0
    };
    this.radius = builder.isClass ? builder._radius : builder.radius;
    this.radius0 = builder.isClass ? builder._radius0 : builder.radius0;
    this.angle = builder.isClass ? builder._angle : builder.angle;
    this.angle0 = builder.isClass ? builder._angle0 : builder.angle0;
    this.strokeOpacity = builder.isClass ? builder._strokeOpacity : builder.strokeOpacity;
    this.fillOpacity = builder.isClass ? builder._fillOpacity : builder.fillOpacity;
  }
}

export { TickBaseEncoding };

import { BarEncodingBaseInterface } from './types';

class BarBaseEncoding {
  color?: BarEncodingBaseInterface['color'];
  x?: BarEncodingBaseInterface['x'];
  y?: BarEncodingBaseInterface['y'];
  x0?: BarEncodingBaseInterface['x0'];
  y0?: BarEncodingBaseInterface['y0'];
  stroke?: BarEncodingBaseInterface['stroke'];
  strokeWidth?: BarEncodingBaseInterface['strokeWidth'];
  strokePosition?: BarEncodingBaseInterface['strokePosition'];

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
    this.stroke = builder.isClass ? builder._stroke : builder.stroke;
    this.strokeWidth = builder.isClass ? builder._strokeWidth : builder.strokeWidth;
    this.strokePosition = builder.isClass ? builder._strokePosition : builder.strokePosition;
  }
}

export { BarBaseEncoding };

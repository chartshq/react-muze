import { PointEncodingBaseInterface } from './types';

class PointBaseEncoding {
  size?: PointEncodingBaseInterface['size'];

  color?: PointEncodingBaseInterface['color'];

  stroke?: PointEncodingBaseInterface['stroke'];

  strokeWidth?: PointEncodingBaseInterface['strokeWidth'];

  fill?: PointEncodingBaseInterface['fill'];

  shape: PointEncodingBaseInterface['shape'];

  x: PointEncodingBaseInterface['x'];

  y: PointEncodingBaseInterface['y'];

  strokeOpacity?: PointEncodingBaseInterface['strokeOpacity'];

  fillOpacity?: PointEncodingBaseInterface['fillOpacity']

  strokePosition?: PointEncodingBaseInterface['strokePosition'];

  interaction?: PointEncodingBaseInterface['interaction'];

  constructor(builder: any) {
    this.size = builder.isClass ? builder._size : builder.size;
    this.color = builder.isClass ? builder._color : builder.color;
    this.stroke = builder.isClass ? builder._stroke : builder.stroke;
    this.strokeWidth = builder.isClass ? builder._strokeWidth : builder.strokeWidth;
    this.fill = builder.isClass ? builder._fill : builder.fill;
    this.shape = builder.isClass ? builder._shape : builder.shape;
    this.x = {
      field: builder.isClass ? builder._x : builder.x
    };
    this.y = {
      field: builder.isClass ? builder._y : builder.y
    };
    this.strokeOpacity = builder.isClass ? builder._strokeOpacity : builder.strokeOpacity;
    this.fillOpacity = builder.isClass ? builder._fillOpacity : builder.fillOpacity;
    this.strokePosition = builder.isClass ? builder._strokePosition : builder.strokePosition;
    this.interaction = builder.isClass ? builder._interaction : builder.interaction;
  }
}

export { PointBaseEncoding };

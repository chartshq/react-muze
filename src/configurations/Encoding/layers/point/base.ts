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
    this.size = builder._size;
    this.color = builder._color;
    this.stroke = builder._stroke;
    this.strokeWidth = builder._strokeWidth;
    this.fill = builder._fill;
    this.shape = builder._shape;
    this.x = {
      field: builder._x
    };
    this.y = {
      field: builder._y
    };
    this.strokeOpacity = builder._strokeOpacity;
    this.fillOpacity = builder._fillOpacity;
    this.strokePosition = builder._strokePosition;
    this.interaction = builder._interaction;
  }
}

export { PointBaseEncoding };

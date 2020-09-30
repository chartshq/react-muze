import { AreaEncodingBaseInterface } from './types';

class AreaBaseEncoding {
  color?: AreaEncodingBaseInterface['color'];
  x?: AreaEncodingBaseInterface['x'];
  y?: AreaEncodingBaseInterface['y'];
  y0?: AreaEncodingBaseInterface['y0'];
  strokeOpacity?: AreaEncodingBaseInterface['strokeOpacity'];
  fillOpacity?: AreaEncodingBaseInterface['fillOpacity'];

  constructor(builder: any) {
    this.color = builder._color;
    this.x = {
      field: builder._x
    };
    this.y = {
      field: builder._y
    };
    this.y0 = {
      field: builder._y0
    };
    this.strokeOpacity = builder._strokeOpacity;
    this.fillOpacity = builder._fillOpacity;
  }
}

export { AreaBaseEncoding };

import { LineEncodingBaseInterface } from './types';

class LineBaseEncoding {
  color?: LineEncodingBaseInterface['color'];
  x?: LineEncodingBaseInterface['x'];
  y?: LineEncodingBaseInterface['y'];
  strokeOpacity?: LineEncodingBaseInterface['strokeOpacity'];
  fillOpacity?: LineEncodingBaseInterface['fillOpacity'];
  strokeWidth?: LineEncodingBaseInterface['strokeWidth'];

  constructor(builder: any) {
    this.color = builder._color;
    this.x = {
      field: builder._x
    };
    this.y = {
      field: builder._y
    };
    this.strokeOpacity = builder._strokeOpacity;
    this.fillOpacity = builder._fillOpacity;
    this.strokeWidth = builder._strokeWidth;
  }
}

export { LineBaseEncoding };

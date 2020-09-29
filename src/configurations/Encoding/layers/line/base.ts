import { LineEncodingBaseInterface } from './types';

class LineBaseEncoding {
  color?: LineEncodingBaseInterface['color'];
  x?: LineEncodingBaseInterface['x'];
  y?: LineEncodingBaseInterface['y'];
  strokeOpacity?: LineEncodingBaseInterface['strokeOpacity'];
  fillOpacity?: LineEncodingBaseInterface['fillOpacity'];
  strokeWidth?: LineEncodingBaseInterface['strokeWidth'];

  constructor(builder: any) {
    this.color = builder.isClass ? builder._color : builder.color;
    this.x = {
      field: builder.isClass ? builder._x : builder.x
    };
    this.y = {
      field: builder.isClass ? builder._y : builder.y
    };
    this.strokeOpacity = builder.isClass ? builder._strokeOpacity : builder.strokeOpacity;
    this.fillOpacity = builder.isClass ? builder._fillOpacity : builder.fillOpacity;
    this.strokeWidth = builder.isClass ? builder._strokeWidth : builder.strokeWidth;
  }
}

export { LineBaseEncoding };

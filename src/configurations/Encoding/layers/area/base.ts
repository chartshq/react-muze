import { AreaEncodingBaseInterface } from './types';

class AreaBaseEncoding {
  color?: AreaEncodingBaseInterface['color'];
  x?: AreaEncodingBaseInterface['x'];
  y?: AreaEncodingBaseInterface['y'];
  y0?: AreaEncodingBaseInterface['y0'];
  strokeOpacity?: AreaEncodingBaseInterface['strokeOpacity'];
  fillOpacity?: AreaEncodingBaseInterface['fillOpacity'];

  constructor(builder: any) {
    this.color = builder.isClass ? builder._color : builder.color;
    this.x = {
      field: builder.isClass ? builder._x : builder.x
    };
    this.y = {
      field: builder.isClass ? builder._y : builder.y
    };
    this.y0 = {
      field: builder.isClass ? builder._y0 : builder.y0
    };
    this.strokeOpacity = builder.isClass ? builder._strokeOpacity : builder.strokeOpacity;
    this.fillOpacity = builder.isClass ? builder._fillOpacity : builder.fillOpacity;
  }
}

export { AreaBaseEncoding };

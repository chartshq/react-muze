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

  // constructor(builder: any) {
  //   this.color = builder._color;
  //   this.x = {
  //     field: builder._x
  //   };
  //   this.y = {
  //     field: builder._y
  //   };
  //   this.x0 = {
  //     field: builder._x0
  //   };
  //   this.y0 = {
  //     field: builder._y0
  //   };
  //   this.stroke = builder._stroke;
  //   this.strokeWidth = builder._strokeWidth;
  //   this.strokePosition = builder._strokePosition;
  // }
  constructor(builder: any) {
    const fieldsProp = ['x', 'y', 'x0', 'y0'];

    Object.keys(builder).forEach(key => {
      if (builder[key] !== undefined) {
        const property = key.slice(1);

        this[property as keyof BarBaseEncoding] = 
        fieldsProp.includes(property) ?
          { field: builder[key] } : builder[key];
      }
    })
  }
}

export { BarBaseEncoding };

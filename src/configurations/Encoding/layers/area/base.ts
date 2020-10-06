import { AreaEncodingBaseInterface } from './types';

class AreaBaseEncoding {
  color?: AreaEncodingBaseInterface['color'];
  x?: AreaEncodingBaseInterface['x'];
  y?: AreaEncodingBaseInterface['y'];
  y0?: AreaEncodingBaseInterface['y0'];
  strokeOpacity?: AreaEncodingBaseInterface['strokeOpacity'];
  fillOpacity?: AreaEncodingBaseInterface['fillOpacity'];

  constructor(builder: any) {
    const fieldsProp = ['x', 'y', 'y0'];

    Object.keys(builder).forEach(key => {
      if (builder[key] !== undefined) {
        const property = key.slice(1);

        this[property as keyof AreaBaseEncoding] = 
        fieldsProp.includes(property) ?
          { field: builder[key] } : builder[key];
      }
    })
  }
}

export { AreaBaseEncoding };

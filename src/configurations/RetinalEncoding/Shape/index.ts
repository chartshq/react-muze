import { RetinalEncodingBase } from '../base';
import { FieldRangeInterface } from '../types';

class Shape {
  isClass: boolean;

  _field: FieldRangeInterface['field'];

  _range: FieldRangeInterface['range'];

  constructor({ field = null, range }: FieldRangeInterface) {
    this.isClass = true;
    this._field = field;
    this._range = range;
  }

  static config(): Shape {
    return new Shape({ field: null });
  }

  field(field: string): Shape {
    this._field = field || null;
    return this;
  }

  range(range: number[]): Shape {
    this._range = range;
    return this;
  }

  create(value?: FieldRangeInterface): FieldRangeInterface {
    const result: any = value ? new RetinalEncodingBase(value) : new RetinalEncodingBase(this);

    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { Shape };

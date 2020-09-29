import { RetinalEncodingBase } from '../base';
import { FieldRangeInterface } from '../types';

class Size {
  isClass: boolean;

  _field: FieldRangeInterface['field'];

  _range: FieldRangeInterface['range'];

  constructor({ field = null, range }: FieldRangeInterface) {
    this.isClass = true;
    this._field = field;
    this._range = range;
  }

  static config(): Size {
    return new Size({ field: null });
  }

  field(field: string): Size {
    this._field = field || null;
    return this;
  }

  range(range: number[]): Size {
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

export { Size };

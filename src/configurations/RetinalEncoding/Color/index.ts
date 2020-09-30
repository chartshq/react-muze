import { RetinalEncodingBase } from '../base';
import { FieldRangeInterface, stringOrNull } from '../types';

class Color {
  _field: FieldRangeInterface['field'];

  _range?: FieldRangeInterface['range'];

  isClass: boolean;

  constructor({ field, range }: FieldRangeInterface) {
    this.isClass = true;
    this._field = field;
    this._range = range;
  }

  static config(): Color {
    return new Color({ field: null });
  }

  field(value: stringOrNull): Color {
    this._field = value || null;
    return this;
  }

  range(value: string[] | number[]): Color {
    this._range = value;
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
export { Color };

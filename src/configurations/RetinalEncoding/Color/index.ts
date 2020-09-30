import { RetinalEncodingBase } from '../base';
import { FieldRangeInterface, stringOrNull } from '../types';
import { inputSanitizer, removeUndefinedValues } from '../../../utils/input-sanitizer';

class Color {
  _field: FieldRangeInterface['field'];

  _range?: FieldRangeInterface['range'];

  constructor({ field, range }: FieldRangeInterface) {
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
    const refinedValues = inputSanitizer(value);

    return removeUndefinedValues(new RetinalEncodingBase(refinedValues || this));
  }
}
export { Color };

import { RetinalEncodingBase } from '../base';
import { FieldRangeInterface, stringOrNull } from '../types';
import { inputSanitizer, removeUndefinedValues } from '../../../utils/input-sanitizer';

class Color {
  _field: FieldRangeInterface['field'];

  _range?: FieldRangeInterface['range'];

  _isStep?: FieldRangeInterface['isStep'];

  constructor({ field, range, isStep }: FieldRangeInterface) {
    this._field = field;
    this._range = range;
    this._isStep = isStep;
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

  step(isStep: boolean): Color {
    this._isStep = isStep;
    return this;
  }

  create(value?: FieldRangeInterface): FieldRangeInterface {
    inputSanitizer(value, this);

    return removeUndefinedValues(new RetinalEncodingBase(this));
  }
}
export { Color };

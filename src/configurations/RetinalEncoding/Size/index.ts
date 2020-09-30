import { RetinalEncodingBase } from '../base';
import { FieldRangeInterface } from '../types';
import { inputSanitizer, removeUndefinedValues } from '../../../utils/input-sanitizer';

class Size {
  _field: FieldRangeInterface['field'];

  _range: FieldRangeInterface['range'];

  constructor({ field = null, range }: FieldRangeInterface) {
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
    inputSanitizer(value, this);

    return removeUndefinedValues(new RetinalEncodingBase(this));
  }
}

export { Size };

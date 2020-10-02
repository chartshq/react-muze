import { stringOrNull, stringArrOrNull } from './types';

class RetinalEncodingBase {
  field: stringOrNull;

  range?: stringArrOrNull;

  step?: boolean;

  constructor(builder: any) {
    this.field = builder._field;
    this.range = builder._range;
    this.step = builder._isStep;
  }
}

export { RetinalEncodingBase };

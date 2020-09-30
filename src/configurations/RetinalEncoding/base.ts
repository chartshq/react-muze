import { stringOrNull, stringArrOrNull } from './types';

class RetinalEncodingBase {
  field: stringOrNull;

  range?: stringArrOrNull;

  constructor(builder: any) {
    this.field = builder._field;
    this.range = builder._range;
  }
}

export { RetinalEncodingBase };

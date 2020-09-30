import { stringOrNull, stringArrOrNull } from './types';

class RetinalEncodingBase {
  field: stringOrNull;

  range?: stringArrOrNull;

  constructor(builder: any) {
    const { isClass, _field, field, _range, range } = builder;

    this.field = isClass ? _field : field;
    this.range = isClass ? _range : range;
  }
}

export { RetinalEncodingBase };

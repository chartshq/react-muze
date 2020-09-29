import { stringOrNull, stringArrOrNull } from './types';

class RetinalEncodingBase {
  field: stringOrNull;

  range?: stringArrOrNull;

  step?: boolean;

  stops?: number;

  constructor(builder: any) {
    this.field = builder.isClass ? builder._field : builder.field;
    this.range = builder.isClass ? builder._range : builder.range;
    this.step = builder.isClass ? builder._step : builder.step;
    this.stops = builder.isClass ? builder._stops : builder.stops;
  }
}

export { RetinalEncodingBase };

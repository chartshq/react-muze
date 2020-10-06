import { FieldRangeInterface, FieldRangeConfigInterface } from '../types';

class Shape {
  private _config : FieldRangeConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Shape {
    return new Shape();
  }

  field(field: FieldRangeInterface['field']): Shape {
    this._config.field = field || null;
    return this;
  }

  range(range: FieldRangeInterface['range']): Shape {
    this._config.range = range;
    return this;
  }

  create(options: FieldRangeConfigInterface = {}): FieldRangeConfigInterface {
    return { ...this._config ,...options};
  }
}

export { Shape };

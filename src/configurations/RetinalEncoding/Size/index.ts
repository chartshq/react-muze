import { FieldRangeInterface, FieldRangeConfigInterface } from '../types';

class Size {
  private _config : FieldRangeConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Size {
    return new Size();
  }

  field(field: FieldRangeInterface['field']): Size {
    this._config.field = field || null;
    return this;
  }

  range(range: FieldRangeInterface['range']): Size {
    this._config.range = range;
    return this;
  }

  create(options: FieldRangeConfigInterface = {}): FieldRangeConfigInterface {
    return { ...this._config ,...options};
  }
}

export { Size };

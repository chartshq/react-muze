import { FieldRangeInterface, FieldRangeConfigInterface } from '../types';

class Color {
  private _config : FieldRangeConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Color {
    return new Color();
  }

  field(value: FieldRangeInterface['field']): Color {
    this._config.field = value || null;
    return this;
  }

  range(value: FieldRangeInterface['range']): Color {
    this._config.range = value;
    return this;
  }

  step(isStep: FieldRangeInterface['isStep']): Color {
    this._config.step = isStep;
    return this;
  }

  create(options: FieldRangeConfigInterface = {}): FieldRangeConfigInterface {
    return { ...this._config ,...options};
  }
}

export { Color };

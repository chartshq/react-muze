import { GridBandsInterface } from './types';
import { GridBandsBase } from './base';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class GridBands {
  _showHorizontal?: GridBandsInterface['showHorizontal'];

  _showVertical?: GridBandsInterface['showVertical'];

  constructor({ showHorizontal = false, showVertical = false }: GridBandsInterface) {
    this._showHorizontal = showHorizontal;
    this._showVertical = showVertical;
  }

  static config(): GridBands {
    return new GridBands({});
  }

  showHorizontal(showHorizontal: GridBandsInterface['showHorizontal']): GridBands {
    this._showHorizontal = showHorizontal;
    return this;
  }

  showVertical(showVertical: GridBandsInterface['showVertical']): GridBands {
    this._showVertical = showVertical;
    return this;
  }

  create(value?: GridBandsInterface): any {
    inputSanitizer(value, this);

    return removeUndefinedValues(new GridBandsBase(this));
  }
}

export { GridBands };

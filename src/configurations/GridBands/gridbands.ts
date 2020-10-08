import { GridBandsInterface, GridBandsConfigInterface } from './types';

class GridBands {
  private _config : GridBandsConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): GridBands {
    return new GridBands();
  }

  showHorizontal(showHorizontal: boolean): GridBands {
    this._config.x = {
      show: showHorizontal
    };
    return this;
  }

  showVertical(showVertical: boolean): GridBands {
    this._config.y = {
      show: showVertical
    };
    return this;
  }

  create(options: GridBandsInterface = {}): GridBandsConfigInterface {
    return { ...this._config ,...options};
  }
}

export { GridBands };

import { GridLinesInterface, GridLinesConfigInterface } from './types';

class GridLines {
  private _config : GridLinesConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): GridLines {
    return new GridLines();
  }

  showHorizontal(showHorizontal: boolean): GridLines {
    this._config.x = {
      show: showHorizontal
    };
    return this;
  }

  showVertical(showVertical: boolean): GridLines {
    this._config.y = {
      show: showVertical
    };
    return this;
  }

  show(show: GridLinesInterface['show']): GridLines {
    this._config.show = show;
    return this;
  }

  color(color: GridLinesInterface['color']): GridLines {
    this._config.color = color;
    return this;
  }

  create(options: GridLinesInterface = {}): GridLinesConfigInterface {
    return { ...this._config ,...options};
  }
}

export { GridLines };

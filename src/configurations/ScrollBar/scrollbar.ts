import { ScrollBarInterface, ScrollBarConfigInterface } from './types';

class ScrollBar {
  private _config : ScrollBarConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): ScrollBar {
    return new ScrollBar();
  }

  verticalAlign(verticalAlign: ScrollBarInterface['verticalAlign']): ScrollBar {
    this._config.vertical = {
      align: verticalAlign
    };
    return this;
  }

  horizontalAlign(horizontalAlign: ScrollBarInterface['horizontalAlign']): ScrollBar {
    this._config.horizontal = {
      align: horizontalAlign
    };
    return this;
  }

  thickness(scrollThickness: ScrollBarInterface['thickness']): ScrollBar {
    this._config.thickness = scrollThickness;
    return this;
  }

  speed(speed: ScrollBarInterface['speed']): ScrollBar {
    this._config.speed = speed;
    return this;
  }

  create(options: ScrollBarInterface = {}): ScrollBarInterface {
    return { ...this._config ,...options};
  }
}

export { ScrollBar };

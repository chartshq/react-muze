import { ScrollBarInterface } from './types';
import { ScrollBarBase } from './base';
import { SCROLL_VERTICAL, SCROLL_HORIZONTAL } from './constants';

class ScrollBar {
  isClass: boolean;

  _verticalAlign?: ScrollBarInterface['verticalAlign'];

  _horizontalAlign?: ScrollBarInterface['horizontalAlign'];

  _thickness?: ScrollBarInterface['thickness'];

  _speed?: ScrollBarInterface['speed'];

  constructor({ verticalAlign = SCROLL_VERTICAL.RIGHT, horizontalAlign = SCROLL_HORIZONTAL.BOTTOM, thickness = 10, speed = 2 }: ScrollBarInterface) {
    this.isClass = true;
    this._verticalAlign = verticalAlign;
    this._horizontalAlign = horizontalAlign;
    this._thickness = thickness;
    this._speed = speed;
  }

  static config(): ScrollBar {
    return new ScrollBar({});
  }

  verticalAlign(verticalAlign: ScrollBarInterface['verticalAlign']): ScrollBar {
    this._verticalAlign = verticalAlign;
    return this;
  }

  horizontalAlign(horizontalAlign: ScrollBarInterface['horizontalAlign']): ScrollBar {
    this._horizontalAlign = horizontalAlign;
    return this;
  }

  thickness(scrollThickness: ScrollBarInterface['thickness']): ScrollBar {
    this._thickness = scrollThickness;
    return this;
  }

  speed(speed: ScrollBarInterface['speed']): ScrollBar {
    this._speed = speed;
    return this;
  }

  create(value?: ScrollBarInterface): any {
    const result: any = value ? new ScrollBarBase(value) : new ScrollBarBase(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { ScrollBar };

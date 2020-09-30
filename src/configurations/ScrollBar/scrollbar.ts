import { ScrollBarInterface } from './types';
import { ScrollBarBase } from './base';
import { SCROLL_VERTICAL, SCROLL_HORIZONTAL } from './constants';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class ScrollBar {
  _verticalAlign?: ScrollBarInterface['verticalAlign'];

  _horizontalAlign?: ScrollBarInterface['horizontalAlign'];

  _thickness?: ScrollBarInterface['thickness'];

  _speed?: ScrollBarInterface['speed'];

  constructor({ verticalAlign = SCROLL_VERTICAL.RIGHT, horizontalAlign = SCROLL_HORIZONTAL.BOTTOM, thickness = 10, speed = 2 }: ScrollBarInterface) {
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
    const refinedValues = inputSanitizer(value);

    return removeUndefinedValues(new ScrollBarBase(refinedValues || this));
  }
}

export { ScrollBar };

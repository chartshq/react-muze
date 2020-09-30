import { GridLinesInterface } from './types';
import { GridLinesBase } from './base';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class GridLines {
  _color?: GridLinesInterface['color'];

  _showHorizontal?: GridLinesInterface['showHorizontal'];

  _showVertical?: GridLinesInterface['showVertical'];

  _show?: GridLinesInterface['show'];

  constructor({ color, showHorizontal = true, showVertical = true, show = true }: GridLinesInterface) {
    this._color = color;
    this._showHorizontal = showHorizontal;
    this._showVertical = showVertical;
    this._show = show;
  }

  static config(): GridLines {
    return new GridLines({});
  }

  color(color: GridLinesInterface['color']): GridLines {
    this._color = color;
    return this;
  }

  showHorizontal(showHorizontal: GridLinesInterface['showHorizontal']): GridLines {
    this._showHorizontal = showHorizontal;
    return this;
  }

  showVertical(showVertical: GridLinesInterface['showVertical']): GridLines {
    this._showVertical = showVertical;
    return this;
  }

  show(show: GridLinesInterface['show']): GridLines {
    this._show = show;
    return this;
  }

  create(value?: GridLinesInterface) {
    inputSanitizer(value, this);

    return removeUndefinedValues(new GridLinesBase(this));
  }
}

export { GridLines };

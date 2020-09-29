import { GridLinesInterface } from './types';
import { GridLinesBase } from './base';

class GridLines {
  isClass: boolean;

  gridLineColor?: GridLinesInterface['color'];

  showHorizontalGridLine?: GridLinesInterface['showHorizontal'];

  showVerticalGridLine?: GridLinesInterface['showVertical'];

  showGridLine?: GridLinesInterface['show'];

  constructor({ color, showHorizontal = true, showVertical = true, show = true }: GridLinesInterface) {
    this.isClass = true;
    this.gridLineColor = color;
    this.showHorizontalGridLine = showHorizontal;
    this.showVerticalGridLine = showVertical;
    this.showGridLine = show;
  }

  static config(): GridLines {
    return new GridLines({});
  }

  color(color: GridLinesInterface['color']): GridLines {
    this.gridLineColor = color;
    return this;
  }

  showHorizontal(showHorizontal: GridLinesInterface['showHorizontal']): GridLines {
    this.showHorizontalGridLine = showHorizontal;
    return this;
  }

  showVertical(showVertical: GridLinesInterface['showVertical']): GridLines {
    this.showVerticalGridLine = showVertical;
    return this;
  }

  show(show: GridLinesInterface['show']): GridLines {
    this.showGridLine = show;
    return this;
  }

  create(value?: GridLinesInterface): any {
    const {show, color, x, y} = value ? new GridLinesBase(value) : new GridLinesBase(this);
    const result: any = {
      show,
      x,
      y
    };
  
    if (color) {
      result.color = color;
    }
  
    return result;
  }
}

export { GridLines };

import { GridLinesInterface } from './types';

class GridLinesBase {
  color?: GridLinesInterface['color'];

  show?: GridLinesInterface['show'];

  x?: {
    show: GridLinesInterface['showHorizontal']
  };

  y?: {
    show: GridLinesInterface['showVertical']
  };

  constructor(builder: any) {
    this.color = builder._color;
    this.show = builder._show;
    this.x = {
      show: builder._showHorizontal
    };
    this.y = {
      show: builder._showVertical
    };
  }
}

export { GridLinesBase };

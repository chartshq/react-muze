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
    this.color = builder.isClass ? builder.gridLineColor : builder.color;
    this.show = builder.isClass ? builder.showGridLine : builder.show;
    this.x = {
      show: builder.isClass ? builder.showHorizontalGridLine : builder.showHorizontal
    };
    this.y = {
      show: builder.isClass ? builder.showVerticalGridLine : builder.showVertical
    };
  }
}

export { GridLinesBase };

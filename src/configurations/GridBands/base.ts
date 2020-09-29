import { GridBandsInterface } from './types';

class GridBandsBase {
  x?: {
    show: GridBandsInterface['showHorizontal']
  };

  y?: {
    show: GridBandsInterface['showVertical']
  };
  
  constructor(builder: any) {
    this.x = {
      show: builder.isClass ? builder.showHorizontalGridBand : builder.showHorizontal
    };
    this.y = {
      show: builder.isClass ? builder.showVerticalGridBand : builder.showVertical
    };
  }
}

export { GridBandsBase };

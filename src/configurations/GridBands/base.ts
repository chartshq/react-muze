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
      show: builder._showHorizontal
    };
    this.y = {
      show: builder._showVertical
    };
  }
}

export { GridBandsBase };

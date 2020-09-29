import { GridBandsInterface } from './types';
import { GridBandsBase } from './base';

class GridBands {
  isClass: boolean;

  showHorizontalGridBand?: GridBandsInterface['showHorizontal'];

  showVerticalGridBand?: GridBandsInterface['showVertical'];

  constructor({ showHorizontal = false, showVertical = false }: GridBandsInterface) {
    this.isClass = true;
    this.showHorizontalGridBand = showHorizontal;
    this.showVerticalGridBand = showVertical;
  }

  static config(): GridBands {
    return new GridBands({});
  }

  showHorizontal(showHorizontal: GridBandsInterface['showHorizontal']): GridBands {
    this.showHorizontalGridBand = showHorizontal;
    return this;
  }

  showVertical(showVertical: GridBandsInterface['showVertical']): GridBands {
    this.showVerticalGridBand = showVertical;
    return this;
  }

  create(value?: GridBandsInterface): any {
    const { x, y }: any = value ? new GridBandsBase(value) : new GridBandsBase(this);
    return { x, y };
  }
}

export { GridBands };

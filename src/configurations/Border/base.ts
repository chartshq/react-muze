import { BorderInterface } from './types';

class BorderBase {
  width?: BorderInterface['width'];

  style?: BorderInterface['style'];

  color?: BorderInterface['color'];

  showColBorders?: BorderInterface['showColBorders'];

  showValueBorders?: BorderInterface['showValueBorders'];

  showRowBorders?: BorderInterface['showRowBorders'];

  constructor(builder: any) {
    this.width = builder._BorderInterface;

    this.style = builder._BorderInterface;

    this.color = builder._BorderInterface;

    this.showColBorders = builder._BorderInterface;

    this.showValueBorders = builder._BorderInterface;

    this.showRowBorders = builder._BorderInterface;
  }
}

export { BorderBase };
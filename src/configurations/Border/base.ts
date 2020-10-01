import { BorderInterface } from './types';

class BorderBase {
  width?: BorderInterface['width'];

  style?: BorderInterface['style'];

  color?: BorderInterface['color'];

  showColBorders?: BorderInterface['showColBorders'];

  showValueBorders?: BorderInterface['showValueBorders'];

  showRowBorders?: BorderInterface['showRowBorders'];

  constructor(builder: any) {
    this.width = builder._width;

    this.style = builder._style;

    this.color = builder._color;

    this.showColBorders = builder._showColBorders;

    this.showValueBorders = builder._showValueBorders;

    this.showRowBorders = builder._showRowBorders;
  }
}

export { BorderBase };
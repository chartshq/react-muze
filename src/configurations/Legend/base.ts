import { LegendInterface } from './types';

class LegendBase {
  show?: LegendInterface['show'];

  position?: LegendInterface['position'];

  title: LegendInterface['title'];

  border?: LegendInterface['border'];

  borderColor?: LegendInterface['borderColor'];

  padding?: LegendInterface['padding'];

  item?: LegendInterface['item'];

  marker?: LegendInterface['marker'];

  textWidth?: LegendInterface['textWidth'];

  textFormatter?: LegendInterface['textFormatter'];

  constructor(builder: any) {
    this.show = builder._show;
    this.position = builder._position;
    this.title = builder._title;
    this.border = builder._border;
    this.borderColor = builder._borderColor;
    this.padding = builder._padding;
    this.item = builder._item;
    this.marker = builder._marker;
    this.textWidth = builder._textWidth;
    this.textFormatter = builder._textFormatter;
  }
}

export { LegendBase };

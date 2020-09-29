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
    this.show = builder.isClass ? builder._show : builder.show;
    this.position = builder.isClass ? builder.legendPosition : builder.position;
    this.title = builder.isClass ? builder.legendTitle : builder.title;
    this.border = builder.isClass ? builder.legendBorder : builder.border;
    this.borderColor = builder.isClass ? builder.legendBorderColor : builder.borderColor;
    this.padding = builder.isClass ? builder.legendPadding : builder.padding;
    this.item = builder.isClass ? builder.legendItem : builder.item;
    this.marker = builder.isClass ? builder.legendMarker : builder.marker;
    this.textWidth = builder.isClass ? builder.itemTextWidth : builder.textWidth;
    this.textFormatter = builder.isClass ? builder.itemTextFormatter : builder.textFormatter;
  }
}

export { LegendBase };

import { LegendInterface } from './types';
import { LegendBase } from './base';

class Legend {
  isClass: boolean;

  _show: LegendInterface['show'];

  _position?: LegendInterface['position'];

  _title?: LegendInterface['title'];

  _border?: LegendInterface['border'];

  _borderColor?: LegendInterface['borderColor'];

  _padding?: LegendInterface['padding'];

  _item?: LegendInterface['item'];

  _marker?: LegendInterface['marker'];

  _textWidth?: LegendInterface['textWidth'];

  _textFormatter?: LegendInterface['textFormatter'];

  constructor({
    show,
    position,
    title,
    border,
    borderColor,
    padding,
    item,
    marker,
    textWidth,
    textFormatter,
  }: LegendInterface) {
    this.isClass = true;
    this._show = show;
    this._position = position;
    this._title = title;
    this._border = border;
    this._borderColor = borderColor;
    this._padding = padding;
    this._item = item;
    this._marker = marker;
    this._textWidth = textWidth;
    this._textFormatter = textFormatter;
  }

  static config(): Legend {
    return new Legend({ show: true });
  }

  position(position: LegendInterface['position']): Legend {
    this._position = position;
    return this;
  }

  show(show: LegendInterface['show']): Legend {
    this._show = show;
    return this;
  }

  title(title: LegendInterface['title']): Legend {
    this._title = title;
    return this;
  }

  border(border: LegendInterface['border']): Legend {
    this._border = border;
    return this;
  }

  borderColor(borderColor: LegendInterface['borderColor']): Legend {
    this._borderColor = borderColor;
    return this;
  }

  padding(padding: LegendInterface['padding']): Legend {
    this._padding = padding;
    return this;
  }

  textWidth(textWidth: LegendInterface['textWidth']): Legend {
    this._textWidth = textWidth;
    return this;
  }

  textFormatter(textFormatter: LegendInterface['textFormatter']): Legend {
    this._textFormatter = textFormatter;
    return this;
  }

  item(legendItem: LegendInterface['item']): Legend {
    this._item = legendItem;
    return this;
  }

  marker(marker: LegendInterface['marker']): Legend {
    this._marker = marker;
    return this;
  }

  create(value?: LegendInterface): any {
    const result: any = value ? new LegendBase(value) : new LegendBase(this);

    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { Legend };

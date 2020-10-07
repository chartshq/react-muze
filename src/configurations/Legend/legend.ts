import { LegendInterface } from './types';

class Legend {
  private _config : LegendInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Legend {
    return new Legend();
  }

  position(position: LegendInterface['position']): Legend {
    this._config.position = position;
    return this;
  }

  show(show: LegendInterface['show']): Legend {
    this._config.show = show;
    return this;
  }

  title(title: LegendInterface['title']): Legend {
    this._config.title = title;
    return this;
  }

  border(border: LegendInterface['border']): Legend {
    this._config.border = border;
    return this;
  }

  borderColor(borderColor: LegendInterface['borderColor']): Legend {
    this._config.borderColor = borderColor;
    return this;
  }

  padding(padding: LegendInterface['padding']): Legend {
    this._config.padding = padding;
    return this;
  }

  textWidth(textWidth: LegendInterface['textWidth']): Legend {
    this._config.textWidth = textWidth;
    return this;
  }

  textFormatter(textFormatter: LegendInterface['textFormatter']): Legend {
    this._config.textFormatter = textFormatter;
    return this;
  }

  item(legendItem: LegendInterface['item']): Legend {
    this._config.item = legendItem;
    return this;
  }

  marker(marker: LegendInterface['marker']): Legend {
    this._config.marker = marker;
    return this;
  }

  create(options: LegendInterface = {}): LegendInterface {
    return { ...this._config ,...options};
  }
}

export { Legend };

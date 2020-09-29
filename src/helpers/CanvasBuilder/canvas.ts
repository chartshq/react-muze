import { CanvasBuilderInterface } from './types';
import { CanvasBase } from './base';
import { CanvasLifecycleEvents } from '../../constants/muze/lifecycle-events';

import { HeadersConfig } from "../../configurations/Headers/types";

class CanvasBuilder {
  _canvas: CanvasBuilderInterface['canvas'];

  _data: CanvasBuilderInterface['data'];

  _rows?: CanvasBuilderInterface['rows'];

  _columns?: CanvasBuilderInterface['columns'];

  _width?: CanvasBuilderInterface['width'];

  _height?: CanvasBuilderInterface['height'];

  _color?: CanvasBuilderInterface['color'];

  _size?: CanvasBuilderInterface['size'];

  _shape?: CanvasBuilderInterface['shape'];

  _detail?: CanvasBuilderInterface['detail'];

  _title?: CanvasBuilderInterface['title'];

  _subtitle?: CanvasBuilderInterface['subtitle'];

  _config?: CanvasBuilderInterface['config'];

  _mount?: CanvasBuilderInterface['mount'];

  _legend?: CanvasBuilderInterface['legend'];

  _layers?: CanvasBuilderInterface['layers'];

  _onInitialized?: CanvasBuilderInterface['onInitialized'];

  _onBeforeUpdate?: CanvasBuilderInterface['onBeforeUpdate'];

  _onUpdated?: CanvasBuilderInterface['onUpdated'];

  _onBeforeDraw?: CanvasBuilderInterface['onBeforeDraw'];

  _onDrawn?: CanvasBuilderInterface['onDrawn'];

  _onBeforeRemove?: CanvasBuilderInterface['onBeforeRemove'];

  _onRemoved?: CanvasBuilderInterface['onRemoved'];

  _onAnimationEnd?: CanvasBuilderInterface['onAnimationEnd'];

  constructor({
    canvas,
    data,
    rows,
    columns,
    width,
    height,
    color,
    size,
    detail,
    title,
    subtitle,
    config,
    legend,
  }: {
    canvas: muze.Canvas;
    data?: CanvasBuilderInterface['data'];
    rows?: CanvasBuilderInterface['rows'];
    columns?: CanvasBuilderInterface['columns'];
    width?: CanvasBuilderInterface['width'];
    height?: CanvasBuilderInterface['height'];
    color?: CanvasBuilderInterface['color'];
    size?: CanvasBuilderInterface['color'];
    detail?: CanvasBuilderInterface['detail'];
    title?: CanvasBuilderInterface['title'];
    subtitle?: CanvasBuilderInterface['subtitle'];
    config?: CanvasBuilderInterface['config'];
    legend?: CanvasBuilderInterface['legend'];
  }) {
    this._canvas = canvas;
    this._data = data;
    this._rows = rows;
    this._columns = columns;
    this._width = width;
    this._height = height;
    this._color = color;
    this._size = size;
    this._detail = detail;
    this._title = title;
    this._subtitle = subtitle;
    this._config = config;
    this._legend = legend;
  }

  static config(canvas: muze.Canvas): CanvasBuilder {
    return new CanvasBuilder({ canvas });
  }

  canvas(): muze.Canvas {
    return this._canvas;
  }

  data(data: muze.DataModel): CanvasBuilder {
    this._data = data;
    return this;
  }

  rows(rows: CanvasBuilderInterface['rows']): CanvasBuilder {
    this._rows = rows;
    return this;
  }

  columns(columns: CanvasBuilderInterface['columns']): CanvasBuilder {
    this._columns = columns;
    return this;
  }

  width(width: CanvasBuilderInterface['width']): CanvasBuilder {
    this._width = width;
    return this;
  }

  height(height: CanvasBuilderInterface['height']): CanvasBuilder {
    this._height = height;
    return this;
  }

  color(color: CanvasBuilderInterface['color']): CanvasBuilder {
    this._color = color;
    return this;
  }

  size(size: CanvasBuilderInterface['size']): CanvasBuilder {
    this._size = size;
    return this;
  }

  shape(shape: CanvasBuilderInterface['shape']): CanvasBuilder {
    this._shape = shape;
    return this;
  }

  detail(detail: CanvasBuilderInterface['detail']): CanvasBuilder {
    this._detail = detail;
    return this;
  }

  title(title: CanvasBuilderInterface['title']): CanvasBuilder {
    this._title = title;
    return this;
  }

  subtitle(subtitle: CanvasBuilderInterface['subtitle']): CanvasBuilder {
    this._subtitle = subtitle;
    return this;
  }

  config(config: CanvasBuilderInterface['config']): CanvasBuilder {
    this._config = config;
    return this;
  }

  legend(legend: CanvasBuilderInterface['legend']): CanvasBuilder {
    this._legend = legend;
    return this;
  }

  mount(mount: CanvasBuilderInterface['mount']): CanvasBuilder {
    this._mount = mount;
    return this;
  }

  layers(layers: CanvasBuilderInterface['layers']): CanvasBuilder {
    this._layers = layers;
    return this;
  }

  onInitialized(callback: CanvasBuilderInterface['onInitialized']): CanvasBuilder {
    this._onInitialized = callback;
    return this;
  }

  onBeforeUpdate(callback: CanvasBuilderInterface['onBeforeUpdate']): CanvasBuilder {
    this._onBeforeUpdate = callback;
    return this;
  }

  onUpdated(callback: CanvasBuilderInterface['onUpdated']): CanvasBuilder {
    this._onUpdated = callback;
    return this;
  }

  onBeforeDraw(callback: CanvasBuilderInterface['onBeforeDraw']): CanvasBuilder {
    this._onBeforeDraw = callback;
    return this;
  }

  onDrawn(callback: CanvasBuilderInterface['onDrawn']): CanvasBuilder {
    this._onDrawn = callback;
    return this;
  }

  onBeforeRemove(callback: CanvasBuilderInterface['onBeforeRemove']): CanvasBuilder {
    this._onBeforeRemove = callback;
    return this;
  }

  onRemoved(callback: CanvasBuilderInterface['onRemoved']): CanvasBuilder {
    this._onRemoved = callback;
    return this;
  }

  onAnimationEnd(callback: CanvasBuilderInterface['onAnimationEnd']): CanvasBuilder {
    this._onAnimationEnd = callback;
    return this;
  }

  create(): void {
    const {
      canvas,
      data,
      rows,
      columns,
      width,
      height,
      color,
      size,
      shape,
      detail,
      title,
      subtitle,
      config,
      legend,
      mount,
      layers,
      onInitialized,
      onBeforeUpdate,
      onUpdated,
      onBeforeDraw,
      onDrawn,
      onBeforeRemove,
      onRemoved,
      onAnimationEnd,
    } = new CanvasBase(this);

    canvas
      .data(data)
      .rows(rows)
      .columns(columns)
      .width(width)
      .height(height)
      .color(color)
      .size(size)
      .shape(shape)
      .detail(detail)
      // .title(title.content, { ...title })
      .title(title ? title.content : undefined, { ...title })
      .subtitle(subtitle ? subtitle.content : undefined, { ...subtitle })
      .config(config)
      .legend(legend)
      .layers(layers)
      .mount(mount);

    [
      [CanvasLifecycleEvents.INITIALIZED, onInitialized],
      [CanvasLifecycleEvents.BEFORE_UPDATE, onBeforeUpdate],
      [CanvasLifecycleEvents.UPDATED, onUpdated],
      [CanvasLifecycleEvents.BEFORE_DRAW, onBeforeDraw],
      [CanvasLifecycleEvents.DRAWN, onDrawn],
      [CanvasLifecycleEvents.BEFORE_REMOVE, onBeforeRemove],
      [CanvasLifecycleEvents.REMOVED, onRemoved],
      [CanvasLifecycleEvents.ANIMATION_END, onAnimationEnd]
    ].forEach(([id, callback]) => {
      if (callback && typeof callback === 'function') {
        canvas.once(id).then(callback);
      }
    });
  }
}

export { CanvasBuilder };

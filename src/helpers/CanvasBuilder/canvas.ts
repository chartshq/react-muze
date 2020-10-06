import { CanvasBuilderInterface } from './types';
// import { CanvasBase } from './base';
import { MuzeConstants } from '../../constants';

class CanvasBuilder {
  private _config : CanvasBuilderInterface;

  private constructor(canvas: muze.Canvas) {
    this._config = {
      canvas
    };
  }

  static config(canvas: muze.Canvas): CanvasBuilder {
    return new CanvasBuilder(canvas);
  }

  canvas(): muze.Canvas | undefined {
    return this._config.canvas;
  }

  data(data: muze.DataModel): CanvasBuilder {
    this._config.data = data;
    return this;
  }

  rows(rows: CanvasBuilderInterface['rows']): CanvasBuilder {
    this._config.rows = rows;
    return this;
  }

  columns(columns: CanvasBuilderInterface['columns']): CanvasBuilder {
    this._config.columns = columns;
    return this;
  }

  width(width: CanvasBuilderInterface['width']): CanvasBuilder {
    this._config.width = width;
    return this;
  }

  height(height: CanvasBuilderInterface['height']): CanvasBuilder {
    this._config.height = height;
    return this;
  }

  color(color: CanvasBuilderInterface['color']): CanvasBuilder {
    this._config.color = color;
    return this;
  }

  size(size: CanvasBuilderInterface['size']): CanvasBuilder {
    this._config.size = size;
    return this;
  }

  shape(shape: CanvasBuilderInterface['shape']): CanvasBuilder {
    this._config.shape = shape;
    return this;
  }

  detail(detail: CanvasBuilderInterface['detail']): CanvasBuilder {
    this._config.detail = detail;
    return this;
  }

  title(title: CanvasBuilderInterface['title']): CanvasBuilder {
    this._config.title = title;
    return this;
  }

  subtitle(subtitle: CanvasBuilderInterface['subtitle']): CanvasBuilder {
    this._config.subtitle = subtitle;
    return this;
  }

  config(config: CanvasBuilderInterface['config']): CanvasBuilder {
    this._config.config = config;
    return this;
  }

  legend(legend: CanvasBuilderInterface['legend']): CanvasBuilder {
    this._config.legend = legend;
    return this;
  }

  mount(mount: CanvasBuilderInterface['mount']): CanvasBuilder {
    this._config.mount = mount;
    return this;
  }

  layers(layers: CanvasBuilderInterface['layers']): CanvasBuilder {
    this._config.layers = layers;
    return this;
  }

  onInitialized(callback: CanvasBuilderInterface['onInitialized']): CanvasBuilder {
    this._config.onInitialized = callback;
    return this;
  }

  onBeforeUpdate(callback: CanvasBuilderInterface['onBeforeUpdate']): CanvasBuilder {
    this._config.onBeforeUpdate = callback;
    return this;
  }

  onUpdated(callback: CanvasBuilderInterface['onUpdated']): CanvasBuilder {
    this._config.onUpdated = callback;
    return this;
  }

  onBeforeDraw(callback: CanvasBuilderInterface['onBeforeDraw']): CanvasBuilder {
    this._config.onBeforeDraw = callback;
    return this;
  }

  onDrawn(callback: CanvasBuilderInterface['onDrawn']): CanvasBuilder {
    this._config.onDrawn = callback;
    return this;
  }

  onBeforeRemove(callback: CanvasBuilderInterface['onBeforeRemove']): CanvasBuilder {
    this._config.onBeforeRemove = callback;
    return this;
  }

  onRemoved(callback: CanvasBuilderInterface['onRemoved']): CanvasBuilder {
    this._config.onRemoved = callback;
    return this;
  }

  onAnimationEnd(callback: CanvasBuilderInterface['onAnimationEnd']): CanvasBuilder {
    this._config.onAnimationEnd = callback;
    return this;
  }

  transform(callback: CanvasBuilderInterface['transform']): CanvasBuilder {
    this._config.transform = callback;
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
      transform
    } = this._config;

    if (canvas) {
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
        .transform(transform)
        .mount(mount);

      [
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.INITIALIZED, onInitialized],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.BEFORE_UPDATE, onBeforeUpdate],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.UPDATED, onUpdated],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.BEFORE_DRAW, onBeforeDraw],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.DRAWN, onDrawn],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.BEFORE_REMOVE, onBeforeRemove],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.REMOVED, onRemoved],
        [MuzeConstants.CANVAS_LIFECYCLE_EVENTS.ANIMATION_END, onAnimationEnd]
      ].forEach(([id, callback]) => {
        if (callback && typeof callback === 'function') {
          canvas.once(id).then(callback);
        }
      });
    }
  }
}

export { CanvasBuilder };

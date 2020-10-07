import { CanvasBuilderInterface } from './types';
import { MuzeConstants } from '../../../../constants';

class CanvasBuilder {
  private _config: CanvasBuilderInterface;

  private constructor(canvas: muze.Canvas) {
    this._config = {
      canvas,
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

  rows(rows: CanvasBuilderInterface["rows"]): CanvasBuilder {
    this._config.rows = rows;
    return this;
  }

  columns(columns: CanvasBuilderInterface["columns"]): CanvasBuilder {
    this._config.columns = columns;
    return this;
  }

  width(width: CanvasBuilderInterface["width"]): CanvasBuilder {
    this._config.width = width;
    return this;
  }

  height(height: CanvasBuilderInterface["height"]): CanvasBuilder {
    this._config.height = height;
    return this;
  }

  color(color: CanvasBuilderInterface["color"]): CanvasBuilder {
    this._config.color = color;
    return this;
  }

  size(size: CanvasBuilderInterface["size"]): CanvasBuilder {
    this._config.size = size;
    return this;
  }

  shape(shape: CanvasBuilderInterface["shape"]): CanvasBuilder {
    this._config.shape = shape;
    return this;
  }

  detail(detail: CanvasBuilderInterface["detail"]): CanvasBuilder {
    this._config.detail = detail;
    return this;
  }

  title(title: CanvasBuilderInterface["title"]): CanvasBuilder {
    this._config.title = title;
    return this;
  }

  subtitle(subtitle: CanvasBuilderInterface["subtitle"]): CanvasBuilder {
    this._config.subtitle = subtitle;
    return this;
  }

  config(config: CanvasBuilderInterface["config"]): CanvasBuilder {
    this._config.config = config;
    return this;
  }

  legend(legend: CanvasBuilderInterface["legend"]): CanvasBuilder {
    this._config.legend = legend;
    return this;
  }

  mount(mount: CanvasBuilderInterface["mount"]): CanvasBuilder {
    this._config.mount = mount;
    return this;
  }

  layers(layers: CanvasBuilderInterface["layers"]): CanvasBuilder {
    this._config.layers = layers;
    return this;
  }

  transform(callback: CanvasBuilderInterface["transform"]): CanvasBuilder {
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
      transform,
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
        .title(title ? title.content : undefined, { ...title })
        .subtitle(subtitle ? subtitle.content : undefined, { ...subtitle })
        .config(config)
        .legend(legend)
        .layers(layers)
        .transform(transform)
        .mount(mount);
    }
  }
}

export { CanvasBuilder };

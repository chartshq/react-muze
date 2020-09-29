import { CanvasBuilderInterface } from './types';

class CanvasBase {
  canvas: CanvasBuilderInterface['canvas'];

  data: CanvasBuilderInterface['data'];

  rows?: CanvasBuilderInterface['rows'];

  columns?: CanvasBuilderInterface['columns'];

  width?: CanvasBuilderInterface['width'];

  height?: CanvasBuilderInterface['height'];

  color?: CanvasBuilderInterface['color'];

  size?: CanvasBuilderInterface['size'];

  shape?: CanvasBuilderInterface['shape'];

  detail?: CanvasBuilderInterface['detail'];

  title?: CanvasBuilderInterface['title'];

  subtitle?: CanvasBuilderInterface['subtitle'];

  config?: CanvasBuilderInterface['config'];

  legend?: CanvasBuilderInterface['legend'];

  mount?: CanvasBuilderInterface['mount'];

  layers?: CanvasBuilderInterface['layers'];

  onInitialized?: CanvasBuilderInterface['onInitialized'];

  onBeforeUpdate?: CanvasBuilderInterface['onBeforeUpdate'];

  onUpdated?: CanvasBuilderInterface['onUpdated'];

  onBeforeDraw?: CanvasBuilderInterface['onBeforeDraw'];

  onDrawn?: CanvasBuilderInterface['onDrawn'];

  onBeforeRemove?: CanvasBuilderInterface['onBeforeRemove'];

  onRemoved?: CanvasBuilderInterface['onRemoved'];

  onAnimationEnd?: CanvasBuilderInterface['onAnimationEnd'];

  sideEffectsMap?: CanvasBuilderInterface['sideEffectsMap'];

  constructor(builder: any) {
    this.canvas = builder._canvas;
    this.data = builder._data;
    this.rows = builder._rows;
    this.columns = builder._columns;
    this.width = builder._width;
    this.height = builder._height;
    this.color = builder._color;
    this.size = builder._size;
    this.shape = builder._shape;
    this.detail = builder._detail;
    this.title = builder._title;
    this.subtitle = builder._subtitle;
    this.config = builder._config;
    this.legend = builder._legend;
    this.mount = builder._mount;
    this.layers = builder._layers;

    this.onInitialized = builder._onInitialized;
    this.onBeforeUpdate = builder._onBeforeUpdate;
    this.onUpdated = builder._onUpdated;
    this.onBeforeDraw = builder._onBeforeDraw;
    this.onDrawn = builder._onDrawn;
    this.onBeforeRemove = builder._onBeforeRemove;
    this.onRemoved = builder._onRemoved;
    this.onAnimationEnd = builder._onAnimationEnd;
    this.sideEffectsMap = builder._sideEffectsMap;
  }
}

export { CanvasBase };

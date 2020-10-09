import { CanvasBuilderInterface } from './types';
declare class CanvasBuilder {
    private _config;
    private constructor();
    static config(canvas: muze.Canvas): CanvasBuilder;
    canvas(): muze.Canvas | undefined;
    data(data: muze.DataModel): CanvasBuilder;
    rows(rows: CanvasBuilderInterface["rows"]): CanvasBuilder;
    columns(columns: CanvasBuilderInterface["columns"]): CanvasBuilder;
    width(width: CanvasBuilderInterface["width"]): CanvasBuilder;
    height(height: CanvasBuilderInterface["height"]): CanvasBuilder;
    color(color: CanvasBuilderInterface["color"]): CanvasBuilder;
    size(size: CanvasBuilderInterface["size"]): CanvasBuilder;
    shape(shape: CanvasBuilderInterface["shape"]): CanvasBuilder;
    detail(detail: CanvasBuilderInterface["detail"]): CanvasBuilder;
    title(title: CanvasBuilderInterface["title"]): CanvasBuilder;
    subtitle(subtitle: CanvasBuilderInterface["subtitle"]): CanvasBuilder;
    config(config: CanvasBuilderInterface["config"]): CanvasBuilder;
    mount(mount: CanvasBuilderInterface["mount"]): CanvasBuilder;
    layers(layers: CanvasBuilderInterface["layers"]): CanvasBuilder;
    transform(callback: CanvasBuilderInterface["transform"]): CanvasBuilder;
    create(): void;
}
export { CanvasBuilder };

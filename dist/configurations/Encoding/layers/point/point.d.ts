import { PointEncodingInterface, PointEncodingBaseInterface } from './types';
declare class PointLayerEncoding {
    private _config;
    private constructor();
    static config(): PointLayerEncoding;
    size(size: PointEncodingInterface['size']): PointLayerEncoding;
    color(color: PointEncodingInterface['color']): PointLayerEncoding;
    stroke(stroke: PointEncodingInterface['stroke']): PointLayerEncoding;
    strokeWidth(strokeWidth: PointEncodingInterface['strokeWidth']): PointLayerEncoding;
    fill(fill: PointEncodingInterface['fill']): PointLayerEncoding;
    shape(shape: PointEncodingInterface['shape']): PointLayerEncoding;
    x(x: PointEncodingInterface['x']): PointLayerEncoding;
    y(y: PointEncodingInterface['y']): PointLayerEncoding;
    strokeOpacity(strokeOpacity: PointEncodingInterface['strokeOpacity']): PointLayerEncoding;
    fillOpacity(fillOpacity: PointEncodingInterface['fillOpacity']): PointLayerEncoding;
    strokePosition(strokePosition: PointEncodingInterface['strokePosition']): PointLayerEncoding;
    interaction(interaction: PointEncodingInterface['interaction']): PointLayerEncoding;
    create(options?: PointEncodingBaseInterface): PointEncodingBaseInterface;
}
export { PointLayerEncoding };

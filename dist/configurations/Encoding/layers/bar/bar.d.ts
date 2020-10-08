import { BarEncodingInterface, BarEncodingBaseInterface } from './types';
declare class BarLayerEncoding {
    private _config;
    private constructor();
    static config(): BarLayerEncoding;
    color(color: BarEncodingInterface['color']): BarLayerEncoding;
    x(x: BarEncodingInterface['x']): BarLayerEncoding;
    y(y: BarEncodingInterface['y']): BarLayerEncoding;
    x0(x0: BarEncodingInterface['x0']): BarLayerEncoding;
    y0(y0: BarEncodingInterface['y0']): BarLayerEncoding;
    stroke(stroke: BarEncodingInterface['stroke']): BarLayerEncoding;
    strokeWidth(strokeWidth: BarEncodingInterface['strokeWidth']): BarLayerEncoding;
    strokePosition(strokePosition: BarEncodingInterface['strokePosition']): BarLayerEncoding;
    create(options?: BarEncodingBaseInterface): BarEncodingBaseInterface;
}
export { BarLayerEncoding };

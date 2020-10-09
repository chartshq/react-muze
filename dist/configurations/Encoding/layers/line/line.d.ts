import { LineEncodingInterface, LineEncodingBaseInterface } from './types';
declare class LineLayerEncoding {
    private _config;
    private constructor();
    static config(): LineLayerEncoding;
    color(color: LineEncodingInterface['color']): LineLayerEncoding;
    x(x: LineEncodingInterface['x']): LineLayerEncoding;
    y(y: LineEncodingInterface['y']): LineLayerEncoding;
    strokeOpacity(strokeOpacity: LineEncodingInterface['strokeOpacity']): LineLayerEncoding;
    fillOpacity(fillOpacity: LineEncodingInterface['fillOpacity']): LineLayerEncoding;
    strokeWidth(strokeWidth: LineEncodingInterface['strokeWidth']): LineLayerEncoding;
    create(options?: LineEncodingBaseInterface): LineEncodingBaseInterface;
}
export { LineLayerEncoding };

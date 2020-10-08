import { AreaEncodingConfigInterface, AreaEncodingInterface } from './types';
declare class AreaLayerEncoding {
    private _config;
    private constructor();
    static config(): AreaLayerEncoding;
    color(color: AreaEncodingInterface['color']): AreaLayerEncoding;
    x(x: AreaEncodingInterface['x']): AreaLayerEncoding;
    y(y: AreaEncodingInterface['y']): AreaLayerEncoding;
    y0(y0: AreaEncodingInterface['y0']): AreaLayerEncoding;
    strokeOpacity(strokeOpacity: AreaEncodingInterface['strokeOpacity']): AreaLayerEncoding;
    fillOpacity(fillOpacity: AreaEncodingInterface['fillOpacity']): AreaLayerEncoding;
    create(options?: AreaEncodingConfigInterface): AreaEncodingConfigInterface;
}
export { AreaLayerEncoding };

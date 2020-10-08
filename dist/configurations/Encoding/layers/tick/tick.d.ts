import { TickEncodingInterface, TickEncodingBaseInterface } from './types';
declare class TickLayerEncoding {
    private _config;
    private constructor();
    static config(): TickLayerEncoding;
    color(color: TickEncodingInterface['color']): TickLayerEncoding;
    x(x: TickEncodingInterface['x']): TickLayerEncoding;
    y(y: TickEncodingInterface['y']): TickLayerEncoding;
    x0(x0: TickEncodingInterface['x0']): TickLayerEncoding;
    y0(y0: TickEncodingInterface['y0']): TickLayerEncoding;
    radius(radius: TickEncodingInterface['radius']): TickLayerEncoding;
    radius0(radius0: TickEncodingInterface['radius0']): TickLayerEncoding;
    angle(angle: TickEncodingInterface['angle']): TickLayerEncoding;
    angle0(angle0: TickEncodingInterface['angle0']): TickLayerEncoding;
    strokeOpacity(strokeOpacity: TickEncodingInterface['strokeOpacity']): TickLayerEncoding;
    fillOpacity(fillOpacity: TickEncodingInterface['fillOpacity']): TickLayerEncoding;
    create(options?: TickEncodingBaseInterface): TickEncodingBaseInterface;
}
export { TickLayerEncoding };

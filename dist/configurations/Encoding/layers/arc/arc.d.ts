import { ArcEncodingInterface } from './types';
declare class ArcLayerEncoding {
    private _config;
    private constructor();
    static config(): ArcLayerEncoding;
    strokeWidth(strokeWidth: ArcEncodingInterface['strokeWidth']): ArcLayerEncoding;
    strokeLinejoin(strokeLinejoin: ArcEncodingInterface['strokeLinejoin']): ArcLayerEncoding;
    angle(angle: ArcEncodingInterface['angle']): ArcLayerEncoding;
    radius(radius: ArcEncodingInterface['radius']): ArcLayerEncoding;
    opacity(opacity: ArcEncodingInterface['opacity']): ArcLayerEncoding;
    color(color: ArcEncodingInterface['color']): ArcLayerEncoding;
    shape(shape: ArcEncodingInterface['shape']): ArcLayerEncoding;
    size(size: ArcEncodingInterface['size']): ArcLayerEncoding;
    create(options?: ArcEncodingInterface): ArcEncodingInterface;
}
export { ArcLayerEncoding };

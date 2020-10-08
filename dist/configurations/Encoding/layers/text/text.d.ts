import { TextEncodingInterface } from './types';
declare class TextLayerEncoding {
    private _config;
    private constructor();
    static config(): TextLayerEncoding;
    x(x: TextEncodingInterface['x']): TextLayerEncoding;
    y(y: TextEncodingInterface['y']): TextLayerEncoding;
    color(color: TextEncodingInterface['color']): TextLayerEncoding;
    size(size: TextEncodingInterface['size']): TextLayerEncoding;
    radius(radius: TextEncodingInterface['radius']): TextLayerEncoding;
    angle(angle: TextEncodingInterface['angle']): TextLayerEncoding;
    text(text: TextEncodingInterface['text']): TextLayerEncoding;
    rotation(rotation: TextEncodingInterface['rotation']): TextLayerEncoding;
    alignmentBaseline(alignmentBaseline: TextEncodingInterface['alignmentBaseline']): TextLayerEncoding;
    create(options?: TextEncodingInterface): TextEncodingInterface;
}
export { TextLayerEncoding };

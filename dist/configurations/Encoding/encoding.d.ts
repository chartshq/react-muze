import { ArcLayerEncoding, AreaLayerEncoding, BarLayerEncoding, LineLayerEncoding, PointLayerEncoding, TextLayerEncoding, TickLayerEncoding } from './layers';
declare class Encoding {
    static Arc: typeof ArcLayerEncoding;
    static Area: typeof AreaLayerEncoding;
    static Bar: typeof BarLayerEncoding;
    static Line: typeof LineLayerEncoding;
    static Point: typeof PointLayerEncoding;
    static Text: typeof TextLayerEncoding;
    static Tick: typeof TickLayerEncoding;
}
export { Encoding };

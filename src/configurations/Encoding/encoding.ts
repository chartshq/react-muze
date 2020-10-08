import { ArcLayerEncoding, AreaLayerEncoding, BarLayerEncoding, LineLayerEncoding, PointLayerEncoding, TextLayerEncoding, TickLayerEncoding } from './layers'

class Encoding {
  static Arc = ArcLayerEncoding;

  static Area = AreaLayerEncoding;

  static Bar = BarLayerEncoding;

  static Line = LineLayerEncoding;

  static Point = PointLayerEncoding;

  static Text = TextLayerEncoding;

  static Tick = TickLayerEncoding;
}

export { Encoding };

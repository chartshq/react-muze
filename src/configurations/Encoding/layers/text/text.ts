import { TextEncodingInterface } from './types';

class TextLayerEncoding {
  private _config : TextEncodingInterface;

  private constructor() {
    this._config = {};
  }

  static config(): TextLayerEncoding {
    return new TextLayerEncoding();
  }

  x(x: TextEncodingInterface['x']): TextLayerEncoding {
    this._config.x = x;
    return this;
  }

  y(y: TextEncodingInterface['y']): TextLayerEncoding {
    this._config.y = y;
    return this;
  }

  color(color: TextEncodingInterface['color']): TextLayerEncoding {
    this._config.color = color;
    return this;
  }

  size(size: TextEncodingInterface['size']): TextLayerEncoding {
    this._config.size = size;
    return this;
  }

  radius(radius: TextEncodingInterface['radius']): TextLayerEncoding {
    this._config.radius = radius;
    return this;
  }

  angle(angle: TextEncodingInterface['angle']): TextLayerEncoding {
    this._config.angle = angle;
    return this;
  }

  text(text: TextEncodingInterface['text']): TextLayerEncoding {
    this._config.text = text;
    return this;
  }
  
  rotation(rotation: TextEncodingInterface['rotation']): TextLayerEncoding {
    this._config.rotation = rotation;
    return this;
  }

  alignmentBaseline(alignmentBaseline: TextEncodingInterface['alignmentBaseline']): TextLayerEncoding {
    this._config.alignmentBaseline = alignmentBaseline;
    return this;
  }

  create(options: TextEncodingInterface = {}): TextEncodingInterface {
    return { ...this._config ,...options};
  }
}

export { TextLayerEncoding };

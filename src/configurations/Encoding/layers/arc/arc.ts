import { ArcEncodingInterface } from './types';

class ArcLayerEncoding {
  private _config : ArcEncodingInterface;

  private constructor() {
    this._config = {};
  }

  static config(): ArcLayerEncoding {
    return new ArcLayerEncoding();
  }

  strokeWidth(strokeWidth: ArcEncodingInterface['strokeWidth']): ArcLayerEncoding {
    this._config.strokeWidth = strokeWidth;
    return this;
  }

  strokeLinejoin(strokeLinejoin: ArcEncodingInterface['strokeLinejoin']): ArcLayerEncoding {
    this._config.strokeLinejoin = strokeLinejoin;
    return this;
  }

  angle(angle: ArcEncodingInterface['angle']): ArcLayerEncoding {
    this._config.angle = angle;
    return this;
  }

  radius(radius: ArcEncodingInterface['radius']): ArcLayerEncoding {
    this._config.radius = radius;
    return this;
  }

  opacity(opacity: ArcEncodingInterface['opacity']): ArcLayerEncoding {
    this._config.opacity = opacity;
    return this;
  }

  color(color: ArcEncodingInterface['color']): ArcLayerEncoding {
    this._config.color = color;
    return this;
  }

  shape(shape: ArcEncodingInterface['shape']): ArcLayerEncoding {
    this._config.shape = shape;
    return this;
  }

  size(size: ArcEncodingInterface['size']): ArcLayerEncoding {
    this._config.size = size;
    return this;
  }

  create(options: ArcEncodingInterface = {}): ArcEncodingInterface {
    return { ...this._config ,...options};
  }
}

export { ArcLayerEncoding };

import { TickEncodingInterface, TickEncodingBaseInterface } from './types';

class TickLayerEncoding {
  private _config : TickEncodingBaseInterface;

  private constructor() {
    this._config = {};
  }

  static config(): TickLayerEncoding {
    return new TickLayerEncoding();
  }

  color(color: TickEncodingInterface['color']): TickLayerEncoding {
    this._config.color = color;
    return this;
  }

  x(x: TickEncodingInterface['x']): TickLayerEncoding {
    this._config.x = {
      field: x
    };
    return this;
  }

  y(y: TickEncodingInterface['y']): TickLayerEncoding {
    this._config.y = {
      field: y
    };
    return this;
  }

  x0(x0: TickEncodingInterface['x0']): TickLayerEncoding {
    this._config.x0 = {
      field: x0
    };
    return this;
  }

  y0(y0: TickEncodingInterface['y0']): TickLayerEncoding {
    this._config.y0 = {
      field: y0
    }
    return this;
  }

  radius(radius: TickEncodingInterface['radius']): TickLayerEncoding {
    this._config.radius = radius;
    return this;
  }

  radius0(radius0: TickEncodingInterface['radius0']): TickLayerEncoding {
    this._config.radius0 = radius0;
    return this;
  }

  angle(angle: TickEncodingInterface['angle']): TickLayerEncoding {
    this._config.angle = angle;
    return this;
  }

  angle0(angle0: TickEncodingInterface['angle0']): TickLayerEncoding {
    this._config.angle0 = angle0;
    return this;
  }

  strokeOpacity(strokeOpacity: TickEncodingInterface['strokeOpacity']): TickLayerEncoding {
    this._config.strokeOpacity = strokeOpacity;
    return this;
  }

  fillOpacity(fillOpacity: TickEncodingInterface['fillOpacity']): TickLayerEncoding {
    this._config.fillOpacity = fillOpacity;
    return this;
  }

  create(options: TickEncodingBaseInterface = {}): TickEncodingBaseInterface {
    return { ...this._config ,...options};
  }
}

export { TickLayerEncoding };

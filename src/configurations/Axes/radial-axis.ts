
import { RadialAxisOptions } from './types';

class RadialAxis {
  _config : RadialAxisOptions;
  
  private constructor() {
      this._config = {};
  }

  static config(): RadialAxis {
    return new RadialAxis();
  }

  range(range: RadialAxisOptions['range']): RadialAxis {
    this._config.range = range;
    return this;
  }

  domain(domain: RadialAxisOptions['domain']): RadialAxis {
    this._config.domain = domain;
    return this;
  }

  create(options: RadialAxisOptions = {}): RadialAxisOptions {
   return { ...this._config , ...options };
  }
}

export { RadialAxis };

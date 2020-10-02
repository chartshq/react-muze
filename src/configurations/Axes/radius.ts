import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

interface AxesRadiusInterface {
  range?: Function;
  domain?: number[];
}

class AxesRadiusBase {
  range: AxesRadiusInterface['range'];

  domain: AxesRadiusInterface['domain'];

  radius: {
    range: AxesRadiusInterface['range'];
    domain: AxesRadiusInterface['domain'];
  }

  constructor(builder: any) {
    this.radius = {
      range: builder._range,
      domain: builder._domain
    }
    // this.range = builder._range;
    // this.domain = builder._domain;
  }
}

class AxesRadius {
  _range: AxesRadiusInterface['range'];

  _domain: AxesRadiusInterface['domain'];

  constructor({ range, domain }: AxesRadiusInterface) {
      this._range = range;
      this._domain = domain;
  }

  static config(): AxesRadius {
    return new AxesRadius({ range: (r: number[]) => r });
  }

  range(range: AxesRadiusInterface['range']): AxesRadius {
    this._range = range;
    return this;
  }

  domain(domain: AxesRadiusInterface['domain']): AxesRadius {
    this._domain = domain;
    return this;
  }

  create(value: AxesRadiusInterface = {}): any {
    inputSanitizer(value, this);

    return removeUndefinedValues(new AxesRadiusBase(this).radius);
  }
}

export { AxesRadius };

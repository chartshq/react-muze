import { LinearAxisOptions } from './types';

class LinearAxis {
  private _config : LinearAxisOptions;

  private constructor() {
    this._config = {};
  }

  static config(): LinearAxis {
    return new LinearAxis();
  }

  name(name: LinearAxisOptions['name']): LinearAxis {
    this._config.name = name ;
    return this;
  }

  show(show: boolean): LinearAxis {
    this._config.show = show;
    return this;
  }

  showAxisName(showAxisName: boolean): LinearAxis {
    this._config.showAxisName = showAxisName;
    return this;
  }

  axisNamePadding(axisNamePadding: LinearAxisOptions['axisNamePadding']): LinearAxis {
    this._config.axisNamePadding = axisNamePadding;
    return this;
  }

  padding(padding: LinearAxisOptions['padding']): LinearAxis {
    this._config.padding = padding;
    return this;
  }

  showInnerTicks(showInnerTicks: LinearAxisOptions['showInnerTicks']): LinearAxis {
    this._config.showInnerTicks = showInnerTicks;
    return this;
  }

  numberOfTicks(numberOfTicks: LinearAxisOptions['numberOfTicks']): LinearAxis {
    this._config.numberOfTicks = numberOfTicks;
    return this;
  }

  tickFormat(format: LinearAxisOptions['tickFormat']): LinearAxis {
    this._config.tickFormat = format;
    return this;
  }

  labels(labelConfig: LinearAxisOptions['labels']): LinearAxis {
    this._config.labels = labelConfig;
    return this;
  }

  interpolator(type: LinearAxisOptions['interpolator']): LinearAxis {
    this._config.interpolator = type;
    return this;
  }

  nice(isNice: LinearAxisOptions['nice']): LinearAxis {
    this._config.nice = isNice;
    return this;
  }

  create(options: LinearAxisOptions = {}): LinearAxisOptions {
    return { ...this._config ,...options};
  }
}

export { LinearAxis };

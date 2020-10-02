import { AxesInterface } from './types';
import { AxesBase } from './base';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';
import { AxesRadius } from './radius';

class Axes {
  _name: AxesInterface['name'];

  _show?: AxesInterface['show'];

  _showAxisName?: AxesInterface['showAxisName'];

  _axisNamePadding?: AxesInterface['axisNamePadding'];

  _padding?: AxesInterface['padding'];

  _showInnerTicks?: AxesInterface['showInnerTicks'];

  _numberOfTicks?: AxesInterface['numberOfTicks'];

  _tickFormat?: AxesInterface['tickFormat'];

  _labels?: any;

  static Radius = AxesRadius;

  constructor({
    name,
    show,
    showAxisName = true,
    axisNamePadding,
    padding,
    showInnerTicks,
    numberOfTicks,
    tickFormat,
    labels,
  }: AxesInterface) {
    this._name = name;
    this._show = show;
    this._showAxisName = showAxisName;
    this._axisNamePadding = axisNamePadding;
    this._padding = padding;
    this._showInnerTicks = showInnerTicks;
    this._numberOfTicks = numberOfTicks;
    this._tickFormat = tickFormat;
    this._labels = labels;
  }

  static config(): Axes {
    return new Axes({ name: null });
  }

  name(name: AxesInterface['name']): Axes {
    this._name = name;
    return this;
  }

  show(show: boolean): Axes {
    this._show = show;
    return this;
  }

  showAxisName(showAxisName: boolean): Axes {
    this._showAxisName = showAxisName;
    return this;
  }

  axisNamePadding(axisNamePadding: AxesInterface['axisNamePadding']): Axes {
    this._axisNamePadding = axisNamePadding;
    return this;
  }

  padding(padding: AxesInterface['padding']): Axes {
    this._padding = padding;
    return this;
  }

  showInnerTicks(showInnerTicks: AxesInterface['showInnerTicks']): Axes {
    this._showInnerTicks = showInnerTicks;
    return this;
  }

  numberOfTicks(numberOfTicks: AxesInterface['numberOfTicks']): Axes {
    this._numberOfTicks = numberOfTicks;
    return this;
  }

  tickFormat(format: AxesInterface['tickFormat']): Axes {
    this._tickFormat = format;
    return this;
  }

  labels(labelConfig: AxesInterface['labels']): Axes {
    this._labels = labelConfig;
    return this;
  }

  create(value: AxesInterface = {}): any {
    // Object.keys(value).forEach(val => {
    //   this[val as keyof AxesInterface](value[val as keyof AxesInterface] as never);
    // });
    inputSanitizer(value, this);

    return removeUndefinedValues(new AxesBase(this));
  }
}

export { Axes };

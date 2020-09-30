import { AxesInterface } from './types';

class AxesBase {
  name: AxesInterface['name'];

  show?: AxesInterface['show'];

  showAxisName?: AxesInterface['showAxisName'];

  axisNamePadding?: AxesInterface['axisNamePadding'];

  padding?: AxesInterface['padding'];

  showInnerTicks?: AxesInterface['showInnerTicks'];

  numberOfTicks?: AxesInterface['numberOfTicks'];

  tickFormat?: AxesInterface['tickFormat'];

  labels?: any;

  constructor(builder: any) {
    this.name = builder._name;
    this.show = builder._show;
    this.showAxisName = builder._showAxisName;
    this.axisNamePadding = builder._axisNamePadding;
    this.padding = builder._padding;
    this.showInnerTicks = builder._showInnerTicks;
    this.numberOfTicks = builder._numberOfTicks;
    this.tickFormat = builder._tickFormat;
    this.labels = builder._axisLabels;
  }
}

export { AxesBase };

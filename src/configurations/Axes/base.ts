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
    this.name = builder.isClass ? builder._name : builder.name;
    this.show = builder.isClass ? builder._show : builder.show;
    this.showAxisName = builder.isClass ? builder._showAxisName : builder.showAxisName;
    this.axisNamePadding = builder.isClass ? builder._axisNamePadding : builder.axisNamePadding;
    this.padding = builder.isClass ? builder._padding : builder.padding;
    this.showInnerTicks = builder.isClass ? builder._showInnerTicks : builder.showInnerTicks;
    this.numberOfTicks = builder.isClass ? builder._numberOfTicks : builder.numberOfTicks;
    this.tickFormat = builder.isClass ? builder._tickFormat : builder.tickFormat;
    this.labels = builder.isClass ? builder._labels : builder.axisLabels;
  }
}

export { AxesBase };

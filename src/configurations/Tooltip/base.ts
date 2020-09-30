import { TooltipInterface } from './types';

class TooltipBase {
  mode?: TooltipInterface['mode'];

  on?: TooltipInterface['on'];

  formatter: TooltipInterface['formatter'];

  displayFields?: TooltipInterface['displayFields'];


  constructor(builder: any) {
    this.mode = builder._mode;
    this.on = builder._on;
    this.formatter = builder._formatter;
    this.displayFields = builder._displayFields;
  }
}

export { TooltipBase };

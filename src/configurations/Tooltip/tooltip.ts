import { TooltipInterface, MuzeTooltipInputInterface, TooltipType, TooltipMode } from './types';
import { TooltipBase } from "./base";
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class Tooltip {
  _on?: TooltipType;

  _mode?: TooltipMode;

  _formatter?: Function;

  _displayFields?: Array<String>;

  constructor({ on, mode, formatter, displayFields }: TooltipInterface) {
    if (mode) this._mode = mode;
    if (on) this._on = on;
    if (formatter) this._formatter = formatter;
    if (displayFields) this._displayFields = displayFields;
  }

  static config(): Tooltip {
    return new Tooltip({});
  }

  mode(mode: TooltipMode): Tooltip {
    this._mode = mode;
    return this;
  }

  on(on: TooltipType): Tooltip {
    this._on = on;
    return this;
  }

  formatter(func: Function): Tooltip {
    this._formatter = func;
    return this;
  }

  displayFields(fields: Array<String>): Tooltip {
    this._displayFields = fields;
    return this;
  }

  create(value?: TooltipInterface): TooltipBase {
    const refinedValues = inputSanitizer(value);
    return removeUndefinedValues(new TooltipBase(refinedValues || this));
  }

  asMuzeInput(): MuzeTooltipInputInterface {
    return {
      mode: this._mode,
      formatter: this._formatter,
      displayFields: this._displayFields,
    };
  }
}

export function multiTooltipIntoMuze(tooltips: Array<Tooltip> | undefined) {
  if (!tooltips) {
    return {};
  }

  let highlightSummary: MuzeTooltipInputInterface | undefined;
  let selectionSummary: MuzeTooltipInputInterface | undefined;

  tooltips.forEach((tooltip) => {
    const { mode, formatter, displayFields } = tooltip.asMuzeInput();
    switch (tooltip._on) {
      case TooltipType.HIGHLIGHT:
        highlightSummary = {};
        if (mode) highlightSummary.mode = mode;
        if (formatter) highlightSummary.formatter = formatter;
        if (displayFields) highlightSummary.displayFields = displayFields;
        break;
      case TooltipType.SELECT:
        selectionSummary = tooltip.asMuzeInput();
        break;
      default:
        break;
    }
  });

  if (!highlightSummary && !selectionSummary) {
    return {};
  } else {
    return {
      tooltip: {
        highlightSummary,
        selectionSummary,
      },
    };
  }
}

export { Tooltip, TooltipType as TOOLTIP_TYPE };

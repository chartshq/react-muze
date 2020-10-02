import { TooltipInterface, MuzeTooltipInputInterface, TooltipType, TooltipMode } from './types';

class Tooltip {
  _type: TooltipType = TooltipType.HIGHLIGHT;

  _mode: TooltipMode = TooltipMode.CONSOLIDATED;

  _formatter?: Function;

  _displayFields?: Array<String>;

  constructor({ type, mode, formatter, displayFields }: TooltipInterface) {
    if (mode) this._mode = mode;
    if (type) this._type = type;
    this._formatter = formatter;
    this._displayFields = displayFields;
  }

  static config(): Tooltip {
    return new Tooltip({});
  }

  mode(mode: TooltipMode): Tooltip {
    this._mode = mode;
    return this;
  }

  on(type: TooltipType): Tooltip {
    this._type = type;
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

  create(values?: TooltipInterface): Tooltip {
    if (!values) {
      return this;
    }

    const { type, mode, formatter, displayFields } = values;

    if (mode) this._mode = mode;
    if (type) this._type = type;
    this._formatter = formatter;
    this._displayFields = displayFields;
    return this;
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
    switch (tooltip._type) {
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

  if (highlightSummary && selectionSummary) {
    return {
      tooltip: {
        highlightSummary,
        selectionSummary,
      },
    };
  } else if (highlightSummary) {
    return {
      tooltip: {
        highlightSummary,
      },
    };
  } else {
    return {
      tooltip: {
        selectionSummary,
      },
    };
  }
}

export { Tooltip, TooltipType as TOOLTIP_TYPE, TooltipMode as TOOLTIP_MODE };

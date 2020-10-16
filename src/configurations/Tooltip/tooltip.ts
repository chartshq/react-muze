import { TooltipInterface, TooltipType, TooltipMode } from "./types";

class Tooltip {
  private _config: TooltipInterface;

  private constructor() {
    this._config = { _type: TooltipType.HIGHLIGHT };
  }

  static config(): Tooltip {
    return new Tooltip();
  }

  on(type: TooltipType): Tooltip {
    this._config._type = type;
    return this;
  }

  mode(mode: TooltipMode): Tooltip {
    this._config.mode = mode;
    return this;
  }

  formatter(func: Function): Tooltip {
    this._config.formatter = func;
    return this;
  }

  displayFields(fields: Array<String>): Tooltip {
    this._config.displayFields = fields;
    return this;
  }

  create(options: TooltipInterface = {}): TooltipInterface {
    return { ...this._config, ...options };
  }
}

export function resolveMultiTooltips(
  tooltips: Array<TooltipInterface> | undefined
) {
  if (!tooltips) {
    return null;
  }

  let hiSum: TooltipInterface | undefined; // highlightSummary
  let selSum: TooltipInterface | undefined; // selectionSummary

  tooltips.forEach((tooltip) => {
    switch (tooltip._type) {
      case TooltipType.HIGHLIGHT:
        hiSum = tooltip;
        delete hiSum._type;
        break;
      case TooltipType.SELECT:
        selSum = tooltip;
        delete selSum._type;
        break;
      default:
        break;
    }
  });

  return hiSum && selSum
    ? {
        highlightSummary: hiSum,
        selectionSummary: selSum,
      }
    : hiSum
    ? {
        ...hiSum,
      }
    : selSum
    ? {
        selectionSummary: selSum,
      }
    : null;
}

export { Tooltip, TooltipType as TOOLTIP_TYPE, TooltipMode as TOOLTIP_MODE };

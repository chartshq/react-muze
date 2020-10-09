import { SideEffectsInterface, SideEffectsConfigInterface } from './types';
import muze from '@chartshq/muze';

class SideEffects {
  private _config : SideEffectsConfigInterface;

  static GenericSideEffect = muze.SideEffects.standards.GenericSideEffect;
  static SpawnableSideEffect = muze.SideEffects.standards.SpawnableSideEffect;
  static SurrogateSideEffect = muze.SideEffects.standards.SurrogateSideEffect;

  static AnchorEffect = muze.SideEffects.sideEffects.AnchorEffect;
  static AxisLabelHighLighter = muze.SideEffects.sideEffects.AxisLabelHighLighter;
  static BrushAnchors = muze.SideEffects.sideEffects.BrushAnchors;
  static Crossline = muze.SideEffects.sideEffects.Crossline;
  static FilterEffect = muze.SideEffects.sideEffects.FilterEffect;
  static FragmentedTooltip = muze.SideEffects.sideEffects.FragmentedTooltip;
  static PersistentAnchors = muze.SideEffects.sideEffects.PersistentAnchors;
  static PlotHighlighter = muze.SideEffects.sideEffects.PlotHighlighter;
  static SelectionBox = muze.SideEffects.sideEffects.SelectionBox;
  static Tooltip = muze.SideEffects.sideEffects.Tooltip;

  private constructor() {
    this._config = {};
  }

  static config(): SideEffects {
    return new SideEffects();
  }

  for(_for: SideEffectsInterface['for']): SideEffects {
    this._config.for = _for;
    return this;
  }

  on(_on: SideEffectsInterface['on']): SideEffects {
    this._config.on = _on;
    return this;
  }

  dissociateFrom(_dissociateFrom: SideEffectsInterface['dissociateFrom']): SideEffects {
    this._config.dissociateSideEffect = _dissociateFrom;
    return this;
  }

  create(options: SideEffectsConfigInterface = {}): SideEffectsConfigInterface {
    return { ...this._config ,...options};
  }
}

export { SideEffects };

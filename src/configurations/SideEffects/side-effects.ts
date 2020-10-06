import { SideEffectsInterface } from './types';
import { SideEffectsBase } from './base';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';
import muze from '@chartshq/muze';

class SideEffects {
  _for: SideEffectsInterface['_for'];

  _on: SideEffectsInterface['_on'];

  _dissociateFrom: SideEffectsInterface['_dissociateFrom'];

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

  constructor({
    _for,
    _on,
    _dissociateFrom
  }: SideEffectsInterface) {
    this._for = _for;
    this._on = _on;
    this._dissociateFrom = _dissociateFrom;
  }

  static config(): SideEffects {
    return new SideEffects({});
  }

  for(_for: SideEffectsInterface['_for']): SideEffects {
    this._for = _for;
    return this;
  }

  on(_on: SideEffectsInterface['_on']): SideEffects {
    this._on = _on;
    return this;
  }

  dissociateFrom(_dissociateFrom: SideEffectsInterface['_dissociateFrom']): SideEffects {
    this._dissociateFrom = _dissociateFrom;
    return this;
  }

  create(value?: SideEffectsInterface): any {
    inputSanitizer(value, this);

    return removeUndefinedValues(new SideEffectsBase(this));
  }
}

export { SideEffects };

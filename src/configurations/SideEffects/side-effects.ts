import { SideEffectsInterface } from './types';
import { SideEffectsBase } from './base';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class SideEffects {
  _for: SideEffectsInterface['_for'];

  _on: SideEffectsInterface['_on'];

  _dissociateFrom: SideEffectsInterface['_dissociateFrom'];
  
  static effect: any;

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

  static register(effect: any) {
    SideEffects.effect = effect;
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
    const refinedValues = inputSanitizer(value);

    return removeUndefinedValues(new SideEffectsBase(refinedValues || this));
  }
}

export { SideEffects };

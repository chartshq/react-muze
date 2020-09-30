import { SideEffectsInterface } from './types';
import { SideEffectsBase } from './base';

class SideEffects {
  isClass: boolean;

  _for: SideEffectsInterface['_for'];

  _on: SideEffectsInterface['_on'];

  _dissociateFrom: SideEffectsInterface['_dissociateFrom'];
  
  static effect: any;

  constructor({
    _for,
    _on,
    _dissociateFrom
  }: SideEffectsInterface) {
    this.isClass = true;
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
    const result: any = value ? new SideEffectsBase(value) : new SideEffectsBase(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { SideEffects };

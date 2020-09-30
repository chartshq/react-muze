import { BehavioursInterface } from './types';
import { SideEffectsBase } from './base';

class Behaviours {
  isClass: boolean;

  _for: BehavioursInterface['_for'];

  _on: BehavioursInterface['_on'];

  _dissociateFrom: BehavioursInterface['_dissociateFrom'];
  
  static effect: any;

  constructor({
    _for,
    _on,
    _dissociateFrom
  }: BehavioursInterface) {
    this.isClass = true;
    this._for = _for;
    this._on = _on;
    this._dissociateFrom = _dissociateFrom;
  }

  static config(): Behaviours {
    return new Behaviours({});
  }

  static register(effect: any) {
    Behaviours.effect = effect;
  }


  for(_for: BehavioursInterface['_for']): Behaviours {
    this._for = _for;
    return this;
  }

  on(_on: BehavioursInterface['_on']): Behaviours {
    this._on = _on;
    return this;
  }

  dissociateFrom(_dissociateFrom: BehavioursInterface['_dissociateFrom']): Behaviours {
    this._dissociateFrom = _dissociateFrom;
    return this;
  }

  create(value?: BehavioursInterface): any {
    const result: any = value ? new SideEffectsBase(value) : new SideEffectsBase(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { Behaviours };

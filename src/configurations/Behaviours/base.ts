import { BehavioursInterface } from './types';

class SideEffectsBase {
  for: BehavioursInterface['_for'];

  on: BehavioursInterface['_on'];

  dissociateBehaviour: BehavioursInterface['_dissociateFrom'];
  
  _effect: BehavioursInterface['_effect'];

  constructor(builder: any) {
    this.for = builder.isClass ? builder._for : builder.for;
    this.on = builder.isClass ? builder._on : builder.on;
    this.dissociateBehaviour = builder.isClass ? builder._dissociateFrom : builder.dissociateFrom;
    this._effect = builder.isClass ? builder._effect : builder.effect;
  }
}

export { SideEffectsBase };

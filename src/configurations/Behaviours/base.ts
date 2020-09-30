import { BehavioursInterface } from './types';

class SideEffectsBase {
  for: BehavioursInterface['_for'];

  on: BehavioursInterface['_on'];

  dissociateBehaviour: BehavioursInterface['_dissociateFrom'];

  constructor(builder: any) {
    this.for = builder._for;
    this.on = builder._on;
    this.dissociateBehaviour = builder._dissociateFrom;
  }
}

export { SideEffectsBase };

import { SideEffectsInterface } from './types';

class SideEffectsBase {
  for: SideEffectsInterface['_for'];

  on: SideEffectsInterface['_on'];

  dissociateSideEffect: SideEffectsInterface['_dissociateFrom'];

  constructor(builder: any) {
    this.for = builder._for;
    this.on = builder._on;
    this.dissociateSideEffect = builder._dissociateFrom;
  }
}

export { SideEffectsBase };

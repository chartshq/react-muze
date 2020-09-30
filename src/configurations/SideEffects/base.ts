import { SideEffectsInterface } from './types';

class SideEffectsBase {
  for: SideEffectsInterface['_for'];

  on: SideEffectsInterface['_on'];

  dissociateSideEffect: SideEffectsInterface['_dissociateFrom'];

  constructor(builder: any) {
    this.for = builder.isClass ? builder._for : builder.for;
    this.on = builder.isClass ? builder._on : builder.on;
    this.dissociateSideEffect = builder.isClass ? builder._dissociateFrom : builder.dissociateFrom;
  }
}

export { SideEffectsBase };

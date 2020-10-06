import { SideEffectsInterface, SideEffectsConfigInterface } from './types';

class SideEffects {
  private _config : SideEffectsConfigInterface;

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

  create(options: SideEffectsInterface = {}): SideEffectsInterface {
    return { ...this._config ,...options};
  }
}

export { SideEffects };

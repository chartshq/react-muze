import { BehavioursInterface, BehavioursConfigInterface } from './types';

class Behaviours {
  private _config : BehavioursConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Behaviours {
    return new Behaviours();
  }

  for(_for: BehavioursInterface['for']): Behaviours {
    this._config.for = _for;
    return this;
  }

  on(_on: BehavioursInterface['on']): Behaviours {
    this._config.on = _on;
    return this;
  }

  dissociateFrom(_dissociateFrom: BehavioursInterface['dissociateFrom']): Behaviours {
    this._config.dissociateBehaviour = _dissociateFrom;
    return this;
  }

  create(options: BehavioursConfigInterface = {}): BehavioursConfigInterface {
    return { ...this._config ,...options};
  }
}

export { Behaviours };

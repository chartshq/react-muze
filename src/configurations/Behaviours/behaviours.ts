import muze from '@chartshq/muze';
import { BehavioursInterface, BehavioursConfigInterface } from './types';

class Behaviours {
  private _config : BehavioursConfigInterface;

  static GenericBehaviour = muze.Behaviours.standards.GenericBehaviour;
  static PersistentBehaviour = muze.Behaviours.standards.PersistentBehaviour;
  static VolatileBehaviour = muze.Behaviours.standards.VolatileBehaviour;
  
  static BrushBehaviour = muze.Behaviours.behaviouralActions.BrushBehaviour;
  static FilterBehaviour = muze.Behaviours.behaviouralActions.FilterBehaviour;
  static HighlightBeahviour = muze.Behaviours.behaviouralActions.HighlightBeahviour;
  static SelectBehaviour = muze.Behaviours.behaviouralActions.SelectBehaviour;

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

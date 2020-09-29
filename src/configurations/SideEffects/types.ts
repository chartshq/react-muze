type StringOrMissing = string | null | undefined;

export interface SideEffectsInterface {
  _for?: StringOrMissing;
  _on?: StringOrMissing;
  _dissociateFrom?: StringOrMissing;
  _effect?: any;
}

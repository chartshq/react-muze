export interface SideEffectsInterface {
  for?: string[];
  on?: string[];
  dissociateFrom?: string[];
}

export interface SideEffectsConfigInterface {
  for?: SideEffectsInterface['for'];
  on?: SideEffectsInterface['on'];
  dissociateSideEffect?: SideEffectsInterface['dissociateFrom'];
}

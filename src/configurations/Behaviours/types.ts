export interface BehavioursInterface {
  for?: string[];
  on?: string[];
  dissociateFrom?: string[];
}

export interface BehavioursConfigInterface {
  for?: BehavioursInterface['for'];
  on?: BehavioursInterface['on'];
  dissociateBehaviour?: BehavioursInterface['dissociateFrom'];
}

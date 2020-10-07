export interface LayerProps {
  mark?: string;
  name?: string;
  interpolate?: 'catmullRom' | 'step' | 'stepBefore' | 'stepAfter';
  className?: string;
  connectNullData?: boolean;
  encoding?: any;
  transformType?: string;
  interactionStyle?: any;
  calculateDomain?: boolean;
  source?: Function;
  interactive?: boolean;
  transition?: {
    effect: 'cubic' | 'bounce' | 'linear' | 'circle' | 'elastic',
    duration?: number,
    disabled?: boolean
  };
}

export interface LayerState {
  id: string
}
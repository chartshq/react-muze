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
  transitionDuration?: number;
}

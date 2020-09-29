import { SCROLL_HORIZONTAL, SCROLL_VERTICAL } from './constants';

export interface ScrollBarInterface {
  verticalAlign?: SCROLL_VERTICAL;
  horizontalAlign?: SCROLL_HORIZONTAL;
  thickness?: number;
  speed?: number;
}

export interface ScrollBarBaseInterface {
  vertical?: {
    align: ScrollBarInterface["verticalAlign"];
  };
  horizontal: {
    align: ScrollBarInterface["horizontalAlign"];
  };
  thickness?: number;
  speed?: number;
}

import { SCROLL_HORIZONTAL, SCROLL_VERTICAL } from './constants';
export interface ScrollBarInterface {
    verticalAlign?: SCROLL_VERTICAL;
    horizontalAlign?: SCROLL_HORIZONTAL;
    thickness?: number;
    speed?: number;
}
export interface ScrollBarConfigInterface {
    vertical?: {
        align: ScrollBarInterface["verticalAlign"];
    };
    horizontal?: {
        align: ScrollBarInterface["horizontalAlign"];
    };
    thickness?: ScrollBarInterface['thickness'];
    speed?: ScrollBarInterface['speed'];
}

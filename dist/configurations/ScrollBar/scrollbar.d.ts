import { ScrollBarInterface } from './types';
declare class ScrollBar {
    private _config;
    private constructor();
    static config(): ScrollBar;
    verticalAlign(verticalAlign: ScrollBarInterface['verticalAlign']): ScrollBar;
    horizontalAlign(horizontalAlign: ScrollBarInterface['horizontalAlign']): ScrollBar;
    thickness(scrollThickness: ScrollBarInterface['thickness']): ScrollBar;
    speed(speed: ScrollBarInterface['speed']): ScrollBar;
    create(options?: ScrollBarInterface): ScrollBarInterface;
}
export { ScrollBar };

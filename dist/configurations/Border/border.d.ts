import { BorderInterface, BORDER_STYLE, MuzeBorderRegionInterface } from "./types";
declare class Border {
    private _config;
    private constructor();
    static config(): Border;
    showRowBorders(region: MuzeBorderRegionInterface): Border;
    showColBorders(region: MuzeBorderRegionInterface): Border;
    showValueBorders(region: MuzeBorderRegionInterface): Border;
    width(width: Number): Border;
    style(style: BORDER_STYLE): Border;
    color(color: String): Border;
    create(options?: BorderInterface): BorderInterface;
}
export { Border };

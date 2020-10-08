import { LegendInterface } from './types';
declare class Legend {
    private _config;
    private constructor();
    static config(): Legend;
    position(position: LegendInterface['position']): Legend;
    show(show: LegendInterface['show']): Legend;
    title(title: LegendInterface['title']): Legend;
    border(border: LegendInterface['border']): Legend;
    borderColor(borderColor: LegendInterface['borderColor']): Legend;
    padding(padding: LegendInterface['padding']): Legend;
    textWidth(textWidth: LegendInterface['textWidth']): Legend;
    textFormatter(textFormatter: LegendInterface['textFormatter']): Legend;
    item(legendItem: LegendInterface['item']): Legend;
    marker(marker: LegendInterface['marker']): Legend;
    create(options?: LegendInterface): LegendInterface;
}
export { Legend };

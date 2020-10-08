import { GridLinesInterface, GridLinesConfigInterface } from './types';
declare class GridLines {
    private _config;
    private constructor();
    static config(): GridLines;
    showHorizontal(showHorizontal: boolean): GridLines;
    showVertical(showVertical: boolean): GridLines;
    show(show: GridLinesInterface['show']): GridLines;
    color(color: GridLinesInterface['color']): GridLines;
    create(options?: GridLinesInterface): GridLinesConfigInterface;
}
export { GridLines };

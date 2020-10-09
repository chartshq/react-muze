import { GridBandsInterface, GridBandsConfigInterface } from './types';
declare class GridBands {
    private _config;
    private constructor();
    static config(): GridBands;
    showHorizontal(showHorizontal: boolean): GridBands;
    showVertical(showVertical: boolean): GridBands;
    create(options?: GridBandsInterface): GridBandsConfigInterface;
}
export { GridBands };

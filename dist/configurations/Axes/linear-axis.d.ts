import { LinearAxisOptions } from './types';
declare class LinearAxis {
    private _config;
    private constructor();
    static config(): LinearAxis;
    name(name: LinearAxisOptions['name']): LinearAxis;
    show(show: boolean): LinearAxis;
    showAxisName(showAxisName: boolean): LinearAxis;
    axisNamePadding(axisNamePadding: LinearAxisOptions['axisNamePadding']): LinearAxis;
    padding(padding: LinearAxisOptions['padding']): LinearAxis;
    showInnerTicks(showInnerTicks: LinearAxisOptions['showInnerTicks']): LinearAxis;
    numberOfTicks(numberOfTicks: LinearAxisOptions['numberOfTicks']): LinearAxis;
    tickFormat(format: LinearAxisOptions['tickFormat']): LinearAxis;
    labels(labelConfig: LinearAxisOptions['labels']): LinearAxis;
    interpolator(type: LinearAxisOptions['interpolator']): LinearAxis;
    nice(isNice: LinearAxisOptions['nice']): LinearAxis;
    create(options?: LinearAxisOptions): LinearAxisOptions;
}
export { LinearAxis };

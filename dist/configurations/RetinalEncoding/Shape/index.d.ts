import { FieldRangeInterface, FieldRangeConfigInterface } from '../types';
declare class Shape {
    private _config;
    private constructor();
    static config(): Shape;
    field(field: FieldRangeInterface['field']): Shape;
    range(range: FieldRangeInterface['range']): Shape;
    create(options?: FieldRangeConfigInterface): FieldRangeConfigInterface;
}
export { Shape };

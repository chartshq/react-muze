import { FieldRangeInterface, FieldRangeConfigInterface } from '../types';
declare class Size {
    private _config;
    private constructor();
    static config(): Size;
    field(field: FieldRangeInterface['field']): Size;
    range(range: FieldRangeInterface['range']): Size;
    create(options?: FieldRangeConfigInterface): FieldRangeConfigInterface;
}
export { Size };

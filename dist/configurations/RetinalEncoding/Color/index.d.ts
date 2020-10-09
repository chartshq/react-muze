import { FieldRangeInterface, FieldRangeConfigInterface } from '../types';
declare class Color {
    private _config;
    private constructor();
    static config(): Color;
    field(value: FieldRangeInterface['field']): Color;
    range(value: FieldRangeInterface['range']): Color;
    step(isStep: FieldRangeInterface['isStep']): Color;
    create(options?: FieldRangeConfigInterface): FieldRangeConfigInterface;
}
export { Color };

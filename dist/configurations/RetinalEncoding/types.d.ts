export interface FieldRangeInterface {
    field?: string;
    range?: string[] | number[];
    isStep?: boolean;
}
export interface FieldRangeConfigInterface {
    field?: string | null;
    range?: string[] | number[];
    step?: boolean;
}

export type stringOrNull = string | null;
export type stringArrOrNull = string[] | null;
export type numberArrOrNull = number[] | null;

export interface FieldRangeInterface {
  field: stringOrNull;
  range?: string[] | number[];
}

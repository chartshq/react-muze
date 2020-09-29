import { POSITION, ALIGNMENT } from "./constants";

export type StringOrMissing = string | null | undefined;
export type NumberOrMissing = number | null | undefined;

export interface HeadersConfig {
  content: StringOrMissing;
  position?: POSITION;
  align?: ALIGNMENT;
  padding?: number;
  className?: string;
}

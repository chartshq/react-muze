import { POSITION, ALIGNMENT } from "./constants";

export interface HeadersConfig {
  content?: string;
  position?: POSITION;
  align?: ALIGNMENT;
  padding?: number;
  className?: string;
}

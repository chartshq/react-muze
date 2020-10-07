declare module muze {
  export interface Env {}
  export interface Canvas {
    alias(): string;
    data: Function;
  }
  export interface DataModel {}
}

declare module 'uuid';
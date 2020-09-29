declare namespace muze {
  export interface Env {}
  export interface Canvas {
    alias(): string;
    data: Function;
    rows: Function;
    columns: Function;
    width: Function;
    height: Function;
    detail: Function;
    color: Function;
    size: Function;
    title: Function;
    subtitle: Function;
    config: Function;
    mount: Function;
    once: Function;
  }
  export interface DataModel {
    select: Function;
    getData: Function;
  }
  export interface Operators {
    html: Function;
  }
}

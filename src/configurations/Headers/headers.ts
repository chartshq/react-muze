import { HeadersBase } from './base';
import { StringOrMissing, HeadersConfig } from './types';
import { POSITION, ALIGNMENT } from './constants';

class Headers {
  isClass: boolean;

  _content: StringOrMissing | Function;

  _position?: POSITION;

  _alignment?: ALIGNMENT;

  _padding?: number;

  _className?: string;

  constructor({ content, position, align, padding, className }: HeadersConfig) {
    this.isClass = true;
    this._content = content;
    this._position = position;
    this._alignment = align;
    this._padding = padding;
    this._className = className;
  }

  static config(): Headers {
    return new Headers({ content: null });
  }

  text(content: StringOrMissing): Headers {
    this._content = content;
    return this;
  }

  html(content: Function): Headers {
    this._content = content;
    return this;
  }

  position(position: POSITION): Headers {
    this._position = position;
    return this;
  }

  align(alignment: ALIGNMENT): Headers {
    this._alignment = alignment;
    return this;
  }

  padding(padding: number): Headers {
    this._padding = padding;
    return this;
  }

  className(className: string): Headers {
    this._className = className;
    return this;
  }

  create(value?: HeadersConfig): any {
    const result: any = value ? new HeadersBase(value) : new HeadersBase(this);
    return Object.keys(result).reduce((acc: any, q) => {
      if (result[q] !== undefined) {
        acc[q] = result[q];
      }
      return acc;
    }, {});
  }
}

export { Headers };

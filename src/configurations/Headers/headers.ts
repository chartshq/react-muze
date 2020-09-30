import { HeadersBase } from './base';
import { StringOrMissing, HeadersConfig } from './types';
import { POSITION, ALIGNMENT } from './constants';
import { inputSanitizer, removeUndefinedValues } from '../../utils/input-sanitizer';

class Headers {
  _content: StringOrMissing | Function;

  _position?: POSITION;

  _align?: ALIGNMENT;

  _padding?: number;

  _className?: string;

  constructor({
    content, position, align, padding, className,
  }: HeadersConfig) {
    this._content = content;
    this._position = position;
    this._align = align;
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
    this._align = alignment;
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
    const refinedValues = inputSanitizer(value);

    return removeUndefinedValues(new HeadersBase(refinedValues || this));
  }
}

export { Headers };

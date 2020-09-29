import { StringOrMissing } from './types';
import { POSITION, ALIGNMENT } from './constants';

class HeadersBase {
  content: StringOrMissing;

  position?: POSITION;

  align?: ALIGNMENT;

  padding?: Number;

  className?: string;

  constructor(builder: any) {
    const {
      isClass,
      _content,
      content,
      _position,
      position,
      _alignment,
      align,
      _padding,
      padding,
      _className,
      className,
    } = builder;

    this.content = isClass ? _content : content;
    this.position = isClass ? _position : position;
    this.align = isClass ? _alignment : align;
    this.padding = isClass ? _padding : padding;
    this.className = isClass ? _className : className;
  }
}

export { HeadersBase };

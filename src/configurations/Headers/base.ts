import { StringOrMissing } from './types';
import { POSITION, ALIGNMENT } from './constants';

class HeadersBase {
  content: StringOrMissing;

  position?: POSITION;

  align?: ALIGNMENT;

  padding?: Number;

  className?: string;

  constructor(builder: any) {
    this.content = builder._content;
    this.position = builder._position;
    this.align = builder._align;
    this.padding = builder._padding;
    this.className = builder._className;
  }
}

export { HeadersBase };

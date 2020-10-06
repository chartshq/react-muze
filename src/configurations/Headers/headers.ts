import { HeadersConfig } from './types';
import { POSITION, ALIGNMENT } from './constants';

class Headers {
  private _config : HeadersConfig;

  private constructor() {
    this._config = {};
  }

  static config(): Headers {
    return new Headers();
  }

  content(content: HeadersConfig['content']): Headers {
    this._config.content = content;
    return this;
  }

  position(position: POSITION): Headers {
    this._config.position = position;
    return this;
  }

  align(alignment: ALIGNMENT): Headers {
    this._config.align = alignment;
    return this;
  }

  padding(padding: HeadersConfig['padding']): Headers {
    this._config.padding = padding;
    return this;
  }

  className(className: HeadersConfig['className']): Headers {
    this._config.className = className;
    return this;
  }

  create(options: HeadersConfig = {}): HeadersConfig {
    return { ...this._config ,...options};
  }
}

export { Headers };

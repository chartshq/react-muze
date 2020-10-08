import { ConfigInterface } from "./types";

class Config {
  private _config: ConfigInterface;

  private constructor() {
    this._config = {};
  }

  static config(): Config {
    return new Config();
  }

  create(options: ConfigInterface = {}): ConfigInterface {
    return { ...this._config, ...options };
  }
}

export { Config };

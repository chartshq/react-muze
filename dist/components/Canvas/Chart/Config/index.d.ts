import { ConfigInterface } from "./types";
declare class Config {
    private _config;
    private constructor();
    static config(): Config;
    create(options?: ConfigInterface): ConfigInterface;
}
export { Config };

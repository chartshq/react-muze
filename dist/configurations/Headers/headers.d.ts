import { HeadersConfig } from './types';
import { POSITION, ALIGNMENT } from './constants';
declare class Headers {
    private _config;
    private constructor();
    static config(): Headers;
    content(content: HeadersConfig['content']): Headers;
    position(position: POSITION): Headers;
    align(alignment: ALIGNMENT): Headers;
    padding(padding: HeadersConfig['padding']): Headers;
    className(className: HeadersConfig['className']): Headers;
    create(options?: HeadersConfig): HeadersConfig;
}
export { Headers };

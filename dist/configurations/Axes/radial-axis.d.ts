import { RadialAxisOptions } from './types';
declare class RadialAxis {
    _config: RadialAxisOptions;
    private constructor();
    static config(): RadialAxis;
    range(range: RadialAxisOptions['range']): RadialAxis;
    domain(domain: RadialAxisOptions['domain']): RadialAxis;
    create(options?: RadialAxisOptions): RadialAxisOptions;
}
export { RadialAxis };

export interface TextEncodingInterface {
    color?: any;
    size?: any;
    radius?: any;
    angle?: string;
    text?: {
        value?: string;
        formatter?: Function;
        background?: {
            padding?: number
        }
    };
    rotation?: {
        [value: string]: number
    };
    alignmentBaseline?: {
        [value: string]: string
    };
}

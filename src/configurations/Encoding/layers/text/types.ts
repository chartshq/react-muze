export interface TextEncodingInterface {
    x?: string | null;
    y?: string | null;
    color?: {
        value: Function
    };
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

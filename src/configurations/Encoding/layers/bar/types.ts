export interface BarEncodingInterface {
    color?: {
        value: Function
    };
    x?: string;
    y?: string;
    x0?: string;
    y0?: string;
    stroke?: {
        [value: string]: string
    };
    strokeWidth?: {
        [value: string]: string
    };
    strokePosition?: {
        [value: string]: string
    };
}

export interface BarEncodingBaseInterface {
    color?: {
        value: Function
    };
    x?: {
        field: string | null
    };
    y?: {
        field: string | null
    };
    x0?: {
        field: string | null
    };
    y0?: {
        field: string | null
    };
    stroke?: {
        [value: string]: string
    };
    strokeWidth?: {
        [value: string]: string
    };
    strokePosition?: {
        [value: string]: string
    };
}
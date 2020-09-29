export interface BarEncodingInterface {
    color?: any;
    x?: string | null;
    y?: string | null;
    x0?: string | null;
    y0?: string | null;
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
    color?: any;
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
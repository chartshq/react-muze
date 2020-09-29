export interface TickEncodingInterface {
    color?: any;
    x?: string | null;
    y?: string | null;
    x0?: string | null;
    y0?: string | null;
    radius?: {
        value: Function
    };
    radius0?: {
        value: Function
    };
    angle?: string;
    angle0?: string;
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
}

export interface TickEncodingBaseInterface {
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
    radius?:  {
        value: Function
    };
    radius0?:  {
        value: Function
    };
    angle?: string;
    angle0?: string;
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
}
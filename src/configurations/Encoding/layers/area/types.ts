export interface AreaEncodingInterface {
    color?: {
        value: Function
    };
    x?: string;
    y?: string;
    y0?: string;
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
}

export interface AreaEncodingConfigInterface {
    color?: {
        value: Function
    };
    x?: {
        field: string
    };
    y?: {
        field: string
    };
    y0?: {
        field: string
    };
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
}

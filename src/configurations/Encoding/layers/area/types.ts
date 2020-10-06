export interface AreaEncodingInterface {
    color?: any;
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
    color?: any;
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

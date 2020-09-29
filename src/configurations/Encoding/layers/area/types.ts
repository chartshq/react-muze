export interface AreaEncodingInterface {
    color?: any;
    x?: string | null;
    y?: string | null;
    y0?: string | null;
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
}

export interface AreaEncodingBaseInterface {
    color?: any;
    x?: {
        field: string | null
    };
    y?: {
        field: string | null
    };
    y0?: {
        field: string | null
    };
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
}

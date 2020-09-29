export interface LineEncodingInterface {
    color?: any;
    x?: string | null;
    y?: string | null;
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
    strokeWidth?: {
        [value: string]: string
    };
}

export interface LineEncodingBaseInterface {
    color?: any;
    x?: {
        field: string | null
    };
    y?: {
        field: string | null
    };
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
    strokeWidth?: {
        [value: string]: string
    };
}

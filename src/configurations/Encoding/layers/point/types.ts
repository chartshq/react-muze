export interface PointEncodingInterface {
    size?: {
        [value: string]: number
    };
    color?: any;
    stroke?: {
        [value: string]: string
    };
    strokeWidth?: {
        [value: string]: number
    };
    fill?: any;
    shape?: any;
    x?: string | null;
    y?: string | null;
    strokeOpacity?: {
        [value: string]: number
    };
    fillOpacity?: {
        [value: string]: number
    };
    strokePosition?: {
        [value: string]: string
    };
    interaction?: any;
}

export interface PointEncodingBaseInterface {
    size?: {
        [value: string]: number
    };
    color?: any;
    stroke?: {
        [value: string]: string
    };
    strokeWidth?: {
        [value: string]: number
    };
    fill?: any;
    shape?: any;
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
    strokePosition?: {
        [value: string]: string
    };
    interaction?: any;
}

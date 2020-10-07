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
    x?: string | null | undefined;
    y?: string | null | undefined;
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
        field: string | null | undefined
    };
    y?: {
        field: string | null | undefined
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

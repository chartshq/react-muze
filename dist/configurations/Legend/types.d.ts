import { LEGEND_POSITION } from './constants';
export interface LegendInterface {
    show?: boolean;
    position?: LEGEND_POSITION;
    title?: string;
    border?: number;
    borderColor?: string;
    padding?: number;
    textWidth?: number;
    textFormatter?: Function;
    item?: {
        text: {
            width?: number;
            formatter?: Function;
        };
    };
    marker?: {
        text: {
            formatter?: Function;
        };
    };
}

import React from "react";
import { LayerProps, LayerState } from "./interfaces";
declare class Layer extends React.Component<LayerProps, LayerState> {
    static Operators: {
        compose: any;
    };
    id: string;
    constructor(props: any);
    componentWillUnmount(): void;
    updateLayerConfig(): any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default Layer;

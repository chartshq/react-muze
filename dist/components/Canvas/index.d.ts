import React from "react";
import "./style.scss";
import { CanvasProps, CanvasState } from "../types";
import { LayerProps } from "../Layer/interfaces";
export default class Canvas extends React.Component<CanvasProps, CanvasState> {
    mountRef: React.RefObject<HTMLInputElement>;
    constructor(props: CanvasProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    shouldComponentUpdate(nextProps: CanvasProps, nextState: CanvasState): boolean;
    setLayerConfig: (config: LayerProps, id: string) => void;
    render(): JSX.Element;
}

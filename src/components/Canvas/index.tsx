/* eslint-disable react/no-did-update-set-state */
import React from "react";
import { Context } from "../../utils/context/muze-context";
import { CanvasProvider } from "../../utils/context/canvas-context";
import "./style.scss";
import { createChart } from "./helper";
import { ChartConfig, CanvasState } from "./interfaces";
import { LayerProps } from "../Layer/interfaces";

export default class Canvas extends React.Component<ChartConfig, CanvasState> {
  mountRef: React.RefObject<HTMLInputElement>;

  constructor(props: ChartConfig) {
    super(props);
    this.state = {
      canvas: (null as unknown) as muze.Canvas,
      layerConfig: [],
    };
    this.mountRef = React.createRef();
  }

  componentDidMount(): void {
    const { env } = this.context;
    this.setState({ canvas: env.canvas() });
  }

  componentDidUpdate(): void {
    const { data } = this.context;
    const mountPoint = this.mountRef.current;

    if (data && mountPoint) {
      createChart(this.state, this.props, mountPoint, this.context);
    }
  }

  setLayerConfig = (config: LayerProps) => {
    this.setState((prevState) => ({
      layerConfig: [...prevState.layerConfig, config],
    }));
  };

  render(): JSX.Element {
    const { className, children } = this.props;
    const { layerConfig } = this.state;
    const computedClassName = className
      ? `muze-chart ${className}`
      : "muze-chart";

    return (
      <CanvasProvider
        values={{
          setLayerConfig: this.setLayerConfig,
          layerConfig,
        }}
      >
        {children}
        <div ref={this.mountRef} className={computedClassName} />
      </CanvasProvider>
    );
  }
}

Canvas.contextType = Context;

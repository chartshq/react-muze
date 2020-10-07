/* eslint-disable react/no-did-update-set-state */
import React from "react";
import { Context } from "../../utils/context/muze-context";
import { CanvasProvider } from "../../utils/context/canvas-context";
import "./style.scss";
import { createChart } from "./chart";
import { ChartConfig, CanvasState } from "./interfaces";
import { LayerProps } from "../Layer/interfaces";

export default class Canvas extends React.Component<ChartConfig, CanvasState> {
  mountRef: React.RefObject<HTMLInputElement>;

  constructor(props: ChartConfig) {
    super(props);
    this.state = {
      canvas: (null as unknown) as muze.Canvas,
      layerConfig: {},
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

  shouldComponentUpdate(nextProps: ChartConfig, nextState: CanvasState) {
    const nextStateLen = Object.keys(nextState.layerConfig).length;
    const stateLen = Object.keys(this.state.layerConfig).length;

    if (nextStateLen !== stateLen) return true;
    return false;
  }

  setLayerConfig = (config: LayerProps, id: string) => {
    const { layerConfig } = this.state;

    if (!config) {
      //Delete layer entry
      let newData = { ...this.state.layerConfig };
      delete newData[id];
      this.setState({ layerConfig: newData });
    } else if (!layerConfig[id]) {
      //New entry
      this.setState((prevState) => ({
        layerConfig: { ...prevState.layerConfig, ...{ [id]: config } },
      }));
    } else if (layerConfig[id]) {
      //Entry exists, replace state entry
      this.setState((prevState: any) => {
        let newData = prevState.layerConfig;
        let item = Object.keys(newData).find((d: any) => d === id);
        Object.assign(newData[item as string], config);

        return {
          layerConfig: newData,
        };
      });
    }
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

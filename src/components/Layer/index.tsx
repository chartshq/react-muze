import React from "react";
import muze from "@chartshq/muze";
import { Context } from "../../utils/context/canvas-context";
// import "./style.scss";
import { LayerProps } from "./interfaces";

class Layer extends React.Component<LayerProps> {
  static Operators = {
    compose: muze.layerFactory.composeLayers,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      layerConfig: [],
    };
  }

  componentDidMount() {
    const { setLayerConfig, layerConfig } = this.context;
    const config = Object.keys(this.props).reduce(
      (acc: any, prop: string, index: number) => {
        if ((this.props as any)[prop] !== undefined) {
          if (prop === "transformType") {
            acc.transform = {
              type: this.props[prop],
            };
          } else if (prop === "interactionStyle") {
            acc.interaction = {
              ...this.props[prop],
            };
          } else {
            acc[prop] = (this.props as any)[prop];
          }
        }
        return acc;
      },
      {}
    );

    setLayerConfig(config);
  }

  render(): JSX.Element {
    return <></>;
  }
}

Layer.contextType = Context;

export default Layer;

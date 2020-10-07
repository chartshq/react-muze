import React from "react";
import muze from "@chartshq/muze";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../../utils/context/canvas-context";
import { LayerProps, LayerState } from "./interfaces";

class Layer extends React.Component<LayerProps, LayerState> {
  static Operators = {
    compose: muze.layerFactory.composeLayers,
  };

  id: string;

  constructor(props: any) {
    super(props);
    this.id = uuidv4();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    const { setLayerConfig } = this.context;

    setLayerConfig(null, this.id);
  }

  updateLayerConfig() {
    return Object.keys(this.props).reduce(
      (acc: any, prop: string, index: number) => {
        if ((this.props as any)[prop] !== undefined) {
          if (prop === "transitionDuration") {
            acc.transition = {
              duration: this.props[prop],
            };
          }
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
  }

  componentDidMount() {
    const { setLayerConfig } = this.context;
    const config = this.updateLayerConfig();

    setLayerConfig(config, this.id);
  }

  componentDidUpdate() {
    const { setLayerConfig } = this.context;
    const config = this.updateLayerConfig();

    setLayerConfig(config, this.id);
  }

  render(): JSX.Element {
    return <></>;
  }
}

Layer.contextType = Context;

export default Layer;

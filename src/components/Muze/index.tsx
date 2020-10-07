import React from "react";
import muze from "@chartshq/muze";
import "@chartshq/muze/dist/muze.css";
import { MuzeProvider } from "../../utils/context/muze-context";
import "./style.scss";
import { MuzeProps, MuzeState } from "./interfaces";
import { DataModelConstants } from "../../constants";

export default class Muze extends React.Component<MuzeProps, MuzeState> {
  public static defaultProps = {
    sideEffects: {},
    behaviours: {},
  };

  static _sideEffects = new Map();
  static get sideEffects() {
    return Muze._sideEffects;
  }

  static _behaviours = new Map();
  static get behaviours() {
    return Muze._behaviours;
  }

  static _physicalActions = new Map();
  static get physicalActions() {
    return Muze._physicalActions;
  }

  static DataModel = Object.assign(muze.DataModel, DataModelConstants);

  static Operators = {
    share: muze.Operators.share,
    html: muze.Operators.html,
    registerSideEffects: (effects: any[]) => {
      effects.forEach((effect) => {
        Muze._sideEffects.set(effect.formalName(), effect);
      });
    },
    registerBehaviours: (behaviours: any[]) => {
      behaviours.forEach((beh) => {
        Muze._behaviours.set(beh.formalName(), beh);
      });
    },
    registerPhysicalActions: (action: { [key: string]: Function }) => {
      Object.keys(action).forEach((key) => {
        Muze._physicalActions.set(key, action[key]);
      });
    },
  };

  constructor(props: MuzeProps) {
    super(props);
    this.state = {
      env: null,
      interactiveCharts: {},
      propagationBehaviour: {},
      allCharts: {},
    };
  }

  componentDidMount = async (): Promise<void> => {
    const { env } = this.state;
    if (!env) {
      this.setState({ env: await muze() });
    }
  };

  componentDidUpdate() {
    const { interactiveCharts, allCharts, propagationBehaviour } = this.state;
    const { sideEffects, behaviours, crossInteractive } = this.props;

    const interactiveChartsLen = Object.values(interactiveCharts).length;
    // Make all charts connected only if Muze has crossInteractive true and
    // crossInteractive prop in not passed in any Canvas
    const canvases =
      crossInteractive && !interactiveChartsLen
        ? Object.values(allCharts)
        : Object.values(interactiveCharts);
    let sideEffectsMap = {};
    let physicalBehaviouralMap = {};

    sideEffectsMap = (sideEffects.on || []).reduce(
      (acc: any, elem: string, i: number) => {
        // acc[elem] = [sideEffects.for[i]];
        acc[elem] = sideEffects.for;
        return acc;
      },
      {}
    );

    physicalBehaviouralMap = (behaviours.on || []).reduce(
      (acc: any, elem: string, i: number) => {
        acc[elem] = {
          // behaviours: behaviours.for[i],
          behaviours: behaviours.for,
        };
        return acc;
      },
      {}
    );

    const actionModel = muze.ActionModel.for(...canvases)
      .enableCrossInteractivity()
      .mapSideEffects(sideEffectsMap)
      .registerPhysicalBehaviouralMap(physicalBehaviouralMap);

    Object.keys(propagationBehaviour).forEach((key) => {
      if (allCharts[key]) {
        actionModel
          .for(allCharts[key])
          .registerPropagationBehaviourMap(propagationBehaviour[key]);
      }
    });

    Muze.sideEffects.forEach((item) => {
      muze.ActionModel.registerSideEffects(item);
    });

    Muze.behaviours.forEach((item) => {
      muze.ActionModel.registerBehaviouralActions(item);
    });

    Muze.physicalActions.forEach((item) => {
      muze.ActionModel.registerPhysicalActions(item);
    });

    if (sideEffects.dissociateSideEffect) {
      actionModel.dissociateSideEffect(sideEffects.dissociateSideEffect);
    }
    if (behaviours.dissociateBehaviour) {
      actionModel.dissociateBehaviour(behaviours.dissociateBehaviour);
    }
  }

  addCrossInteraction = (canvas: muze.Canvas): void => {
    const { interactiveCharts } = this.state;

    if (!interactiveCharts[canvas.alias()]) {
      this.setState({
        interactiveCharts: {
          ...this.state.interactiveCharts,
          [canvas.alias()]: canvas,
        },
      });
    }
  };

  addChildChart = (canvas: muze.Canvas): void => {
    const { allCharts } = this.state;

    if (!allCharts[canvas.alias()]) {
      this.setState({
        allCharts: {
          ...this.state.allCharts,
          [canvas.alias()]: canvas,
        },
      });
    }
  };

  addPropagationBehaviour = (canvas: muze.Canvas, config: any): void => {
    const { propagationBehaviour } = this.state;

    if (!propagationBehaviour[canvas.alias()]) {
      this.setState({
        propagationBehaviour: {
          ...this.state.propagationBehaviour,
          [canvas.alias()]: config,
        },
      });
    }
  };

  render(): JSX.Element | null {
    const { env } = this.state;
    const {
      data,
      children,
      xAxis,
      yAxis,
      colorLegend,
      sizeLegend,
      shapeLegend,
      scrollBar,
      colorScheme,
      onAnimationEnd,
      onInitialized,
      onBeforeUpdate,
      onUpdated,
      onBeforeDraw,
      onDrawn,
      onBeforeRemove,
      onRemoved,
      crossInteractive,
    } = this.props;

    return (
      env && (
        <div className="muze-wrapper">
          <MuzeProvider
            values={{
              env,
              data,
              xAxis,
              yAxis,
              colorLegend,
              sizeLegend,
              shapeLegend,
              scrollBar,
              colorScheme,
              onInitialized,
              onBeforeUpdate,
              onUpdated,
              onBeforeDraw,
              onDrawn,
              onBeforeRemove,
              onRemoved,
              onAnimationEnd,
              crossInteractive,
              addCrossInteraction: this.addCrossInteraction,
              addChildChart: this.addChildChart,
              addPropagationBehaviour: this.addPropagationBehaviour,
            }}
          >
            {children}
          </MuzeProvider>
        </div>
      )
    );
  }
}

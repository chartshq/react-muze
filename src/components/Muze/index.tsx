import React from "react";
import muze from "@chartshq/muze";
import "@chartshq/muze/dist/muze.css";
import { MuzeProvider } from "../../utils/context/muze-context";
import "./style.scss";
import { MuzeProps, MuzeState } from "./interfaces";
import { SideEffects, Behaviours } from "../../configurations";
import { DataModelConstants } from "../../constants";

export default class Muze extends React.Component<MuzeProps, MuzeState> {
  public static defaultProps = {
    sideEffects: [],
    behaviours: {},
    propagationBehaviourMap: {},
  };

  static Operators = {
    share: muze.Operators.share,
    html: muze.Operators.html,
  };

  static DataModel = Object.assign(muze.DataModel, DataModelConstants);

  static SideEffects = muze.SideEffects.standards;

  static Behaviours = muze.Behaviours.standards;

  constructor(props: MuzeProps) {
    super(props);
    this.state = {
      env: null,
      interactiveCharts: {},
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
    const { interactiveCharts, allCharts } = this.state;
    const {
      sideEffects,
      behaviours,
      crossInteractive,
      propagationBehaviourMap,
    } = this.props;

    const interactiveChartsLen = Object.values(interactiveCharts).length;
    // Make all charts connected only if Muze has crossInteractive true and
    // crossInteractive prop in not passed in any Canvas
    const canvases =
      crossInteractive && !interactiveChartsLen
        ? Object.values(allCharts)
        : Object.values(interactiveCharts);
    let sideEffectsMap = {};
    let physicalBehaviouralMap = {};

    sideEffectsMap = sideEffects.reduce((acc: any, elem: any, i: number) => {
      const sideEffectConfig = (elem.on || []).reduce(
        (acc: any, elem1: string, i: number) => {
          acc[elem1] = [elem.for[i]];
          return acc;
        },
        {}
      );
      acc = { ...acc, ...sideEffectConfig };
      return acc;
    }, {});

    // sideEffectsMap = (sideEffects.on || []).reduce(
    //   (acc: any, elem: string, i: number) => {
    //     acc[elem] = sideEffects.for[i];
    //     return acc;
    //   },
    //   {}
    // );

    physicalBehaviouralMap = (behaviours.on || []).reduce(
      (acc: any, elem: string, i: number) => {
        acc[elem] = {
          behaviours: behaviours.for[i],
        };
        return acc;
      },
      {}
    );

    const registeredSideEffect = SideEffects.effect;
    const registeredBehaviour = Behaviours.effect;

    const actionModel = muze.ActionModel.for(...canvases)
      .enableCrossInteractivity()
      .mapSideEffects(sideEffectsMap)
      .registerPhysicalBehaviouralMap(physicalBehaviouralMap)
      .registerPropagationBehaviourMap(propagationBehaviourMap);

    if (registeredSideEffect) {
      actionModel.registerSideEffects(registeredSideEffect);
    }
    if (registeredBehaviour) {
      actionModel.registerBehaviouralActions(registeredBehaviour);
    }
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
            }}
          >
            {children}
          </MuzeProvider>
        </div>
      )
    );
  }
}

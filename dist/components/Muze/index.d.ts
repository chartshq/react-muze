import React from "react";
import muze from "@chartshq/muze";
import "@chartshq/muze/dist/muze.css";
import "./style.scss";
import { MuzeProps, MuzeState } from "./interfaces";
export default class Muze extends React.Component<MuzeProps, MuzeState> {
    static defaultProps: {
        sideEffects: {};
        behaviours: {};
    };
    static Utils: any;
    static _sideEffects: Map<any, any>;
    static get sideEffects(): Map<any, any>;
    static _behaviours: Map<any, any>;
    static get behaviours(): Map<any, any>;
    static _physicalActions: Map<any, any>;
    static get physicalActions(): Map<any, any>;
    static DataModel: any;
    static Operators: {
        share: any;
        html: any;
        registerSideEffects: (effects: any[]) => void;
        registerBehaviours: (behaviours: any[]) => void;
        registerPhysicalActions: (action: {
            [key: string]: Function;
        }) => void;
    };
    constructor(props: MuzeProps);
    componentDidMount: () => Promise<void>;
    componentDidUpdate(): void;
    addCrossInteraction: (canvas: muze.Canvas) => void;
    addChildChart: (canvas: muze.Canvas) => void;
    addPropagationBehaviour: (canvas: muze.Canvas, config: any) => void;
    render(): JSX.Element | null;
}

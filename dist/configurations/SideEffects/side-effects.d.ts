import { SideEffectsInterface, SideEffectsConfigInterface } from './types';
declare class SideEffects {
    private _config;
    static GenericSideEffect: any;
    static SpawnableSideEffect: any;
    static SurrogateSideEffect: any;
    static AnchorEffect: any;
    static AxisLabelHighLighter: any;
    static BrushAnchors: any;
    static Crossline: any;
    static FilterEffect: any;
    static FragmentedTooltip: any;
    static PersistentAnchors: any;
    static PlotHighlighter: any;
    static SelectionBox: any;
    static Tooltip: any;
    private constructor();
    static config(): SideEffects;
    for(_for: SideEffectsInterface['for']): SideEffects;
    on(_on: SideEffectsInterface['on']): SideEffects;
    dissociateFrom(_dissociateFrom: SideEffectsInterface['dissociateFrom']): SideEffects;
    create(options?: SideEffectsConfigInterface): SideEffectsConfigInterface;
}
export { SideEffects };

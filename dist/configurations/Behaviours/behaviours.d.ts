import { BehavioursInterface, BehavioursConfigInterface } from './types';
declare class Behaviours {
    private _config;
    static GenericBehaviour: any;
    static PersistentBehaviour: any;
    static VolatileBehaviour: any;
    static BrushBehaviour: any;
    static FilterBehaviour: any;
    static HighlightBeahviour: any;
    static SelectBehaviour: any;
    private constructor();
    static config(): Behaviours;
    for(_for: BehavioursInterface['for']): Behaviours;
    on(_on: BehavioursInterface['on']): Behaviours;
    dissociateFrom(_dissociateFrom: BehavioursInterface['dissociateFrom']): Behaviours;
    create(options?: BehavioursConfigInterface): BehavioursConfigInterface;
}
export { Behaviours };

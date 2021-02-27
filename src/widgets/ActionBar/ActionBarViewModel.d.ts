import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import { Action } from '../../types/action';
import TipManager from '../TipManager';
export default class ActionBarViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    side: string;
    actions: Action[];
    title: string;
    tipManager: TipManager;
    constructor(params?: unknown);
    changePanel: (name: string) => void;
    tipButtonCreated: (elm: HTMLElement) => void;
    actionBarCreated: () => void;
    initActions(): void;
    actionsLoaded: (elm: HTMLElement) => void;
    init(view: esri.MapView | esri.SceneView): void;
}

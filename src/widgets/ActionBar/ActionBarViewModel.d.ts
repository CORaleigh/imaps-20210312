import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
export default class ActionBarViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    side: string;
    actions: Action[];
    constructor(params?: unknown);
    changePanel: (name: string) => void;
    actionsLoaded: (elm: HTMLElement) => void;
    init(view: esri.MapView | esri.SceneView): void;
}

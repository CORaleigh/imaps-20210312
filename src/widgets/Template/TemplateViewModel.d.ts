import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
export default class TemplateViewModel extends Accessor {
    view: esri.MapView | esri.SceneView | undefined;
    name: string;
    constructor(params?: unknown);
    init(view: esri.MapView | esri.SceneView): void;
}

import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
export default class LayersViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    layerList: esri.LayerList;
    constructor(params?: any);
    init(view: esri.MapView | esri.SceneView): void;
}

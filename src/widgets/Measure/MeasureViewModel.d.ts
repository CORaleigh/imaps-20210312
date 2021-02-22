import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
export default class MeasureViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    constructor(params?: any);
    measurement: esri.Measurement;
    init(view: esri.MapView | esri.SceneView): void;
}

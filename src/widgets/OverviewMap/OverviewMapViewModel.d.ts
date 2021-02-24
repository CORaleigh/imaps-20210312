import esri = __esri;
import MapView from '@arcgis/core/views/MapView';
import Accessor from '@arcgis/core/core/Accessor';
export default class OverviewMapViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    overviewMapView: esri.MapView;
    constructor(params?: any);
    stopEvtPropagation: (event: any) => void;
    disableZooming: (view: any) => esri.MapView;
    init(view: esri.MapView | esri.SceneView): void;
}

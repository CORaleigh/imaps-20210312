import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import Search from '@arcgis/core/widgets/Search';
export default class LocationSearchViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    search: Search;
    constructor(params?: any);
    init(view: esri.MapView | esri.SceneView): void;
}

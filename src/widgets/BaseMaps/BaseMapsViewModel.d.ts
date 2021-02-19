import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import BaseMapGallery from '@arcgis/core/widgets/BasemapGallery';
export default class BaseMapsViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    basemaps: BaseMapGallery;
    images: BaseMapGallery;
    activeBasemap: esri.Basemap;
    constructor(params?: any);
    changePropertyLines: (basemap: esri.Basemap) => void;
    init(view: esri.MapView | esri.SceneView): void;
    toggleContent: (value: string) => void;
}

import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Graphic from '@arcgis/core/Graphic';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
export default class PropertySearchViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    condosTable: esri.FeatureLayer;
    addressTable: esri.FeatureLayer;
    propertyLayer: esri.FeatureLayer;
    searchWidget: esri.widgetsSearch;
    featureTable: esri.FeatureTable;
    feature: esri.Feature;
    geometry: esri.Geometry;
    detailsDisabled: boolean;
    clusterPoints: FeatureLayer;
    graphics: esri.GraphicsLayer;
    singleSymbol: esri.SimpleFillSymbol;
    multiSymbol: esri.SimpleFillSymbol;
    selectedProperty: esri.Graphic;
    constructor(params?: any);
    searchByGeometry(geometry: esri.Geometry): void;
    createFeatureTableLayer: (fields: esri.Field[], features: esri.Graphic[]) => FeatureLayer;
    addClusterGraphics: (result: esri.FeatureSet) => void;
    addGraphics: (result: esri.FeatureSet) => void;
    getProperty: (oids: number[], source?: string | undefined) => void;
    searchComplete: (event: esri.SearchSearchCompleteEvent) => void;
    setFeature(feature: esri.Graphic, view: esri.MapView, mediaInfos: any[], oids: number[]): void;
    exportTable(): void;
    checkSearchParams: () => void;
    init(view: esri.MapView | esri.SceneView): void;
    getSuggestions: (params: any, name: string, layer: esri.FeatureLayer, outFields: string[], orderByFields: string[], searchFields: string[], startsWith: boolean) => Promise<{
        key: string;
        text: any;
        sourceIndex: any;
    }[]>;
    initSearch(): void;
    toggleContent: (value: string) => void;
}

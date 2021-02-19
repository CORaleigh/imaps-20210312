import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Measurement from '@arcgis/core/widgets/Measurement';
export default class SelectViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    layer: esri.FeatureLayer;
    constructor(params?: any);
    sketch: esri.Sketch;
    bufferDistance: number;
    graphics: GraphicsLayer;
    measurement: Measurement;
    geometry: esri.Geometry;
    initSketch(): void;
    init(): void;
}

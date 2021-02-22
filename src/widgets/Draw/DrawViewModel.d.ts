import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import Sketch from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Measurement from '@arcgis/core/widgets/Measurement';
export default class DrawViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    container: string;
    measurement: Measurement;
    sketch: Sketch;
    graphics: GraphicsLayer;
    label: string;
    textColor: esri.Color;
    constructor(params?: any);
    initDraw(): void;
    init(view: esri.MapView | esri.SceneView): void;
}

import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import Measurement from '@arcgis/core/widgets/Measurement';
import SelectViewModel from './Select/SelectViewModel';
import './Select/styles/Select.scss';
export interface SelectProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
    layer?: esri.FeatureLayer;
}
export default class Select extends Widget {
    view: esri.MapView | esri.SceneView;
    layer: esri.FeatureLayer;
    sketch: esri.Sketch;
    bufferDistance: number;
    measurement: Measurement;
    viewModel: SelectViewModel;
    _sketchCreated: () => void;
    constructor(properties?: SelectProperties);
    handleChange(ev: any): void;
    render(): tsx.JSX.Element;
}

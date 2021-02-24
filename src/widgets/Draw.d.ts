import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import Color from '@arcgis/core/Color';
import DrawViewModel from './Draw/DrawViewModel';
import Measurement from '@arcgis/core/widgets/Measurement';
import './Draw/styles/Draw.scss';
export interface DrawProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class Draw extends Widget {
    view: esri.MapView | esri.SceneView;
    label: string;
    textColor: Color;
    measurement: Measurement;
    viewModel: DrawViewModel;
    constructor(properties?: DrawProperties);
    _drawUpdated: () => void;
    render(): tsx.JSX.Element;
}

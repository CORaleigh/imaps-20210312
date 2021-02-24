import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import ClearViewModel from './Clear/ClearViewModel';
import './Clear/styles/Clear.scss';
export interface ClearProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class Clear extends Widget {
    view: esri.MapView | esri.SceneView;
    viewModel: ClearViewModel;
    constructor(properties?: ClearProperties);
    clearTitle: string;
    renderIcon: () => tsx.JSX.Element;
    _clear: () => void;
    render(): tsx.JSX.Element;
}

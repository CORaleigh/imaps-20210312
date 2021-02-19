import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import LayersViewModel from './Layers/LayersViewModel';
export interface LayersProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class Layers extends Widget {
    view: esri.MapView | esri.SceneView;
    layerList: esri.LayerList;
    viewModel: LayersViewModel;
    constructor(properties?: LayersProperties);
    filterLayers: (value: string) => void;
    _createLayers: () => void;
    clearClick: () => void;
    _createSearch: (input: HTMLElement) => void;
    _reset: () => void;
    render(): tsx.JSX.Element;
}

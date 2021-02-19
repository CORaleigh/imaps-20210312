import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import BaseMapsViewModel from './BaseMaps/BaseMapsViewModel';
export interface BaseMapsProperties extends esri.WidgetProperties {
    view?: esri.MapView | esri.SceneView;
}
export default class BaseMaps extends Widget {
    view: esri.MapView | esri.SceneView;
    basemaps: esri.BasemapGallery;
    images: esri.BasemapGallery;
    viewModel: BaseMapsViewModel;
    constructor(properties?: BaseMapsProperties);
    _createMaps: () => void;
    _createImages: () => void;
    handleSwitchChange: (e: any) => void;
    handleSliderChange: (e: any) => void;
    _sliderCreated: (e: any) => void;
    _blendCreated: (e: any) => void;
    render(): tsx.JSX.Element;
}

import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import LocationSearchViewModel from './LocationSearch/LocationSearchViewModel';
import './LocationSearch/styles/LocationSearch.scss';
export interface LocationSearchProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class LocationSearch extends Widget {
    view: esri.MapView | esri.SceneView;
    search: esri.widgetsSearch;
    viewModel: LocationSearchViewModel;
    constructor(properties?: LocationSearchProperties);
    _searchCreate: () => void;
    render(): tsx.JSX.Element;
}

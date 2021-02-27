import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertySearchViewModel from './PropertySearch/PropertySearchViewModel';
import './PropertySearch/styles/PropertySearch.scss';
export interface PropertySearchProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
    propertyLayer?: esri.FeatureLayer;
    condosTable?: esri.FeatureLayer;
    addressTable?: esri.FeatureLayer;
}
export default class PropertySearch extends Widget {
    view: esri.MapView | esri.SceneView | undefined;
    condosTable: esri.FeatureLayer | undefined;
    addressTable: esri.FeatureLayer | undefined;
    propertyLayer: esri.FeatureLayer | undefined;
    searchWidget: esri.widgetsSearch | undefined;
    featureTable: esri.FeatureTable | undefined;
    feature: esri.Feature | undefined;
    geometry: esri.Geometry | undefined;
    detailsDisabled: boolean;
    viewModel: PropertySearchViewModel;
    constructor(properties?: PropertySearchProperties);
    _createSearch: () => void;
    _createTable: () => void;
    _createFeature: () => void;
    _navCreated: (elm: Element) => void;
    currentRadioButton: string;
    render(): tsx.JSX.Element;
}

import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import OverviewMapViewModel from './OverviewMap/OverviewMapViewModel';
import './OverviewMap/styles/OverviewMap.scss';
export interface OverviewMapProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class OverviewMap extends Widget {
    view: esri.MapView | esri.SceneView;
    overviewMapView: esri.MapView;
    name: string;
    viewModel: OverviewMapViewModel;
    constructor(properties?: OverviewMapProperties);
    overviewCreated: (div: HTMLDivElement) => void;
    render(): tsx.JSX.Element;
}

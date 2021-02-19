import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import ActionBarViewModel from './ActionBar/ActionBarViewModel';
import './ActionBar/styles/ActonBar.scss';
export interface ActionBarProperties extends esri.WidgetProperties {
    side?: string;
    actions?: Action[];
    view?: esri.MapView | esri.SceneView;
}
export default class ActionBar extends Widget {
    view: esri.MapView | esri.SceneView;
    side: string;
    actions: Action[];
    title: string;
    viewModel: ActionBarViewModel;
    activeWidget: any;
    constructor(properties?: ActionBarProperties);
    actionBarCreated: (elm: HTMLElement) => void;
    panelCreated: () => void;
    render(): tsx.JSX.Element;
}

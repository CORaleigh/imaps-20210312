import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import ActionBarViewModel from './ActionBar/ActionBarViewModel';
import './ActionBar/styles/ActonBar.scss';
import { Action } from '../types/action';
import TipManager from './TipManager';
export interface ActionBarProperties extends esri.WidgetProperties {
    side?: string;
    actions?: Action[];
    view?: esri.MapView | esri.SceneView;
    tipManager?: TipManager;
}
export default class ActionBar extends Widget {
    view: esri.MapView | esri.SceneView;
    side: string;
    actions: Action[];
    title: string;
    tipManager: null;
    viewModel: ActionBarViewModel;
    constructor(properties?: ActionBarProperties);
    panelCreated: () => void;
    render(): tsx.JSX.Element;
}

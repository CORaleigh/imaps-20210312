import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import MenuViewModel from './Menu/MenuViewModel';
import './Menu/styles/Menu.scss';
export interface MenuProperties extends esri.WidgetProperties {
    view?: esri.MapView | esri.SceneView;
}
export default class Menu extends Widget {
    view: esri.MapView | esri.SceneView;
    theme: string;
    viewModel: MenuViewModel;
    menuCreated: () => void;
    constructor(properties?: MenuProperties);
    render(): tsx.JSX.Element;
}

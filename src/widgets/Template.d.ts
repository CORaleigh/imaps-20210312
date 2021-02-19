import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import TemplateViewModel from './Template/TemplateViewModel';
export interface TemplateProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class Template extends Widget {
    view: esri.MapView | esri.SceneView | undefined;
    name: string;
    viewModel: TemplateViewModel;
    constructor(properties?: TemplateProperties);
    render(): tsx.JSX.Element;
}

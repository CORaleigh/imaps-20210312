import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import TipManagerViewModel from './TipManager/TipManagerViewModel';
import { Tip } from '../types/tip';
export interface TipManagerProperties extends esri.WidgetProperties {
    title?: string;
    tips?: Tip[];
}
export default class TipManager extends Widget {
    title: string;
    tips: Tip[];
    viewModel: TipManagerViewModel;
    constructor(properties?: TipManagerProperties);
    render(): tsx.JSX.Element;
}

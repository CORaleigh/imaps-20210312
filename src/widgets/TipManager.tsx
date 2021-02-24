import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import TipManagerViewModel from './TipManager/TipManagerViewModel';
import { Tip } from '../types/tip';

export interface TipManagerProperties extends esri.WidgetProperties {
	title?: string;
	tips?: Tip[];
}

const CSS = {
	base: 'esri-widget tipmanager-base',
};

@subclass('app.widgets.TipManager')
export default class TipManager extends Widget {
	@aliasOf('viewModel.title')
	@renderable()
	title!: string;
	@aliasOf('viewModel.tips')
	tips!: Tip[];

	@property({
		type: TipManagerViewModel,
	})
	@renderable()
	viewModel: TipManagerViewModel = new TipManagerViewModel();

	constructor(properties?: TipManagerProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<calcite-tip-manager
					dir="ltr"
					intl-close="Close"
					intl-default-title={this.title}
					intl-pagination-label="Tip"
					intl-next="Next"
					intl-previous="Previous"
					theme="light"
					closed
				></calcite-tip-manager>
			</div>
		);
	}
}

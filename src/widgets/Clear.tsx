import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import ClearViewModel from './Clear/ClearViewModel';
import './Clear/styles/Clear.scss';
export interface ClearProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget--button esri-widget',
	text: 'esri-icon-font-fallback-text',
	trashIcon: 'esri-icon esri-icon-trash',
	loadingIcon: 'esri-icon-loading-indicator',
	rotatingIcon: 'esri-rotating',
	widgetIcon: 'esri-icon-trash',

	// common
	disabled: 'esri-disabled',
};

@subclass('app.widgets.Clear')
export default class Clear extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@property({
		type: ClearViewModel,
	})
	@renderable()
	viewModel: ClearViewModel = new ClearViewModel();

	constructor(properties?: ClearProperties) {
		super(properties);
	}
	clearTitle = 'Clear';
	renderIcon = (): tsx.JSX.Element => {
		return <span aria-hidden="true" class={this.classes(CSS.trashIcon)} />;
	};
	_clear = (): void => {
		this.view.map.allLayers
			.filter((layer) => {
				return layer.type === 'graphics';
			})
			.forEach((layer) => {
				(layer as esri.GraphicsLayer).removeAll();
			});
	};
	render(): tsx.JSX.Element {
		return (
			<div
				bind={this}
				class={this.classes(CSS.base)}
				role="button"
				onclick={this._clear}
				onkeydown={this._clear}
				aria-label={this.clearTitle}
				title={this.clearTitle}
			>
				{this.renderIcon()}
			</div>
		);
	}
}

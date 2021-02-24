import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import OverviewMapViewModel from './OverviewMap/OverviewMapViewModel';
import './OverviewMap/styles/OverviewMap.scss';

export interface OverviewMapProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget overviewmap-base',
};

@subclass('app.widgets.OverviewMap')
export default class OverviewMap extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.overviewMapView')
	overviewMapView!: esri.MapView;
	@aliasOf('viewModel.name')
	@renderable()
	name = '';

	@property({
		type: OverviewMapViewModel,
	})
	@renderable()
	viewModel: OverviewMapViewModel = new OverviewMapViewModel();

	constructor(properties?: OverviewMapProperties) {
		super(properties);
	}
	overviewCreated = (div: HTMLDivElement): void => {
		if (this.overviewMapView) {
			this.overviewMapView.container = div;
		}
	};
	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div afterCreate={this.overviewCreated} id="overviewDiv"></div>
			</div>
		);
	}
}

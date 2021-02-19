import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import TemplateViewModel from './Template/TemplateViewModel';

export interface TemplateProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget template-base',
};

@subclass('app.widgets.Template')
export default class Template extends Widget {
	@aliasOf('viewModel.view')
	view: esri.MapView | esri.SceneView | undefined;

	@aliasOf('viewModel.name')
	@renderable()
	name = '';

	@property({
		type: TemplateViewModel,
	})
	@renderable()
	viewModel: TemplateViewModel = new TemplateViewModel();

	constructor(properties?: TemplateProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<p>Welcome {this.name}!</p>
			</div>
		);
	}
}

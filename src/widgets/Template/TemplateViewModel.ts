import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.Template.TemplateViewModel')
export default class TemplateViewModel extends Accessor {
	@property() view: esri.MapView | esri.SceneView | undefined;

	@property() name = 'Slagathor';

	constructor(params?: unknown) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	init(view: esri.MapView | esri.SceneView): void {
		console.log(view.scale);
	}
}

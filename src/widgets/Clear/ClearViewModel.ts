/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.Clear.ClearViewModel')
export default class ClearViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}
	init(view: esri.MapView | esri.SceneView): void {
		console.log(view.scale);
	}
}

import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.ActionBar.ActionBarViewModel')
export default class ActionBarViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	@property() side = '';
	@property() actions: Action[] = [];

	constructor(params?: unknown) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		whenDefinedOnce(this, 'actions', this.actionsLoaded.bind(this));
	}

	actionsLoaded(): void {
		console.log(document.querySelectorAll('calcite-action'));
		document.querySelectorAll('calcite-action').forEach((action) => {
			action.addEventListener('click', (evt) => {
				console.log(evt);
			});
		});
	}

	init(view: esri.MapView | esri.SceneView): void {
		console.log(view.scale);
	}
}

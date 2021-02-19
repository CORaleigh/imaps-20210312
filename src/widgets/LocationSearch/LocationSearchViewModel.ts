/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Search from '@arcgis/core/widgets/Search';

@subclass('app.widgets.LocationSearch.LocationSearchViewModel')
export default class LocationSearchViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	search!: Search;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	init(view: esri.MapView | esri.SceneView): void {
		this.search = new Search({ view: view, maxSuggestions: 30, searchAllEnabled: true });
		console.log(this.search.allSources);

		this.search.allSources.on('after-add', (e) => {
			if ((e.item as any).layer) {
				e.item.name = (e.item as any).layer.title;
				e.item.placeholder = (e.item as any).layer.title;
			}
			if ((e.item as any).locator) {
				this.search.allSources.remove(e.item);
			}
		});
	}
}

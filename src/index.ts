// Map data
import { map } from './data/app';

// MapView
import MapView from '@arcgis/core//views/MapView';

// widget utils
import { initWidgets, select, propertySearch, actionBar } from './widgets';


/**
 * Initialize application
 */
export const view = new MapView({
	container: 'viewDiv',
	map,
});
view.when(initWidgets);
view.when(() => {
	view.on('hold', (e) => {
		propertySearch.geometry = e.mapPoint;
		setTimeout(() => {
			//toggleAction('Search');
		}, 1000);
	});
	const propertyLayer = map.allLayers.find((layer) => {
		return layer.title === 'Property' && layer.type === 'feature';
	});
	view.whenLayerView(propertyLayer)
		.then(() => {
			document.querySelector('#mapLoader')?.toggleAttribute('active');
			propertySearch.propertyLayer = propertyLayer as __esri.FeatureLayer;
			//search by geometry after sketch creation in select widget
			select.viewModel.watch('geometry', (geometry: __esri.Geometry) => {
				propertySearch.geometry = geometry;
				// actionBar.actions.forEach((action: any) => {
				// 	if (action.text === 'Search') {
				// 		actionBar.toggleAction(action);
				// 	}
				// });
			});
		})
		.catch((reason: any) => {
			//on error loading property layer, display alert
			console.log(reason);
			//showAlert('Property layer did not load. Please contact iMAPS Help Desk.', 'red');
		});
});

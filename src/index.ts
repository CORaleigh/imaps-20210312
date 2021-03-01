/* eslint-disable @typescript-eslint/no-explicit-any */
// Map data
import { map } from './data/app';

// MapView
import MapView from '@arcgis/core/views/MapView';

// widget utils
import { initWidgets, loadLayout, select, propertySearch } from './widgets';
import WebMap from '@arcgis/core/WebMap';
/**
 * Initialize application
 */
export let view: MapView;
// = new MapView({
// 	container: 'viewDiv',
// 	map,
// });
const preload = document.createElement('link');
preload.href = './assets/esri/themes/light/main.css';
preload.setAttribute('rel', 'preload');
preload.setAttribute('type', 'text/css');
document.querySelector('head')?.append(preload);
const link = document.createElement('link');
link.href = './assets/esri/themes/light/main.css';
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
document.querySelector('head')?.append(link);

loadLayout().then(() => {
	view = new MapView({
		container: 'viewDiv',
		map,
	});
	view.when(initWidgets);
	view?.when(() => {
		checkLocalStorage(view);
		view.on('hold', (e) => {
			propertySearch.geometry = e.mapPoint;
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
});

window.addEventListener('pagehide', () => {
	view.map.removeMany(
		view.map.allLayers
			.filter((layer) => {
				return layer.type === 'group' && !(layer as __esri.GroupLayer).layers.length;
			})
			.toArray(),
	);
	const json = (view.map as any).toJSON();
	json.initialState.viewpoint.targetGeometry = view.extent;
	window.localStorage.setItem('imaps', JSON.stringify(json));
});

function checkLocalStorage(view: MapView): void {
	if (window.localStorage.getItem('imaps')) {
		const webmap: WebMap = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
		webmap.load().then(() => {
			view.map.allLayers.forEach((layer) => {
				const lyr = webmap.allLayers.find((l) => {
					return layer.id === l.id;
				});
				layer.visible = lyr?.visible;
				layer.opacity = lyr?.opacity;
			});
			view.map.basemap = webmap.basemap;
			view.extent = webmap.initialViewProperties.viewpoint.targetGeometry.extent;
		});
	}
}

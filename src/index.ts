// Map data
import { map } from './data/app';

// MapView
import MapView from '@arcgis/core//views/MapView';

// widget utils
import { initWidgets } from './widgets';

/**
 * Initialize application
 */
export const view = new MapView({
	container: 'viewDiv',
	map,
});

view.when(initWidgets);

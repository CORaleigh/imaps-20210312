// Widgets
import LayerList from '@arcgis/core//widgets/LayerList';
import Legend from '@arcgis/core//widgets/Legend';
import ActionBar from './widgets/ActionBar';
import PropertySearch from './widgets/PropertySearch';
import { condosTable, addressTable, featureLayer, createTemplate } from './data/search';
import LocationSearch from './widgets/LocationSearch';
import Layers from './widgets/Layers';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function initWidgets(view: __esri.MapView) {
	createTemplate(view);
	const legend = new Legend({ view });
	const layerList = new LayerList({ view });
	const layers = new Layers({ view });
	const propertySearch = new PropertySearch({
		view: view,
		condosTable: condosTable,
		addressTable: addressTable,
		propertyLayer: featureLayer,
	});
	const locationSearch = new LocationSearch({ view });
	new ActionBar({
		view: view,
		container: 'leftbar',
		side: 'left',
		actions: [
			{ title: 'Select', widget: layerList, icon: 'selection', container: 'selectDiv', active: false },
			{ title: 'Legend', widget: legend, icon: 'legend', container: 'legendDiv', active: false },
		],
	});
	new ActionBar({
		view: view,
		container: 'rightbar',
		side: 'right',
		actions: [
			{
				title: 'Property Search',
				widget: propertySearch,
				icon: 'search',
				container: 'propertySearchDiv',
				active: false,
			},
			{
				title: 'Location Search',
				widget: locationSearch,
				icon: 'pin',
				container: 'locationSearchDiv',
				active: false,
			},
			{
				title: 'Layers',
				widget: layers,
				icon: 'layers',
				container: 'layerDiv',
				active: false,
			},
		],
	});

	//view.ui.add(legend, 'bottom-left');
	//view.ui.add(layerList, 'top-right');
	return view;
}

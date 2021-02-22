// Widgets
import Legend from '@arcgis/core//widgets/Legend';
import ActionBar from './widgets/ActionBar';
import PropertySearch from './widgets/PropertySearch';
import { condosTable, addressTable, featureLayer, createTemplate } from './data/search';
import LocationSearch from './widgets/LocationSearch';
import Layers from './widgets/Layers';
import BaseMaps from './widgets/BaseMaps';
import Select from './widgets/Select';
import Measure from './widgets/Measure';
import Draw from './widgets/Draw';
import Menu from './widgets/Menu';

export let actionBar: ActionBar;
export let toolbar: ActionBar;

export let propertySearch: PropertySearch;
export let select: Select;
export let measurement: Measure;
export let drawWidget: Draw;
export let menu: Menu;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function initWidgets(view: __esri.MapView) {
	createTemplate(view);
	const legend = new Legend({ view });
	const layers = new Layers({ view });
	const basemaps = new BaseMaps({ view: view });
	select = new Select({
		view: view,
		layer: featureLayer,
	});
	measurement = new Measure({ view });
	measurement.postInitialize = () => {
		if (drawWidget) {
			drawWidget.measurement = measurement.viewModel.measurement;
		}
		if (select) {
			select.measurement = measurement.viewModel.measurement;
		}
	};
	drawWidget = new Draw({ view });
	if (measurement) {
		drawWidget.measurement = measurement.viewModel.measurement;
	}
	propertySearch = new PropertySearch({
		view: view,
		condosTable: condosTable,
		addressTable: addressTable,
		propertyLayer: featureLayer,
	});

	const locationSearch = new LocationSearch({ view });
	toolbar.view = view;
	toolbar.actions = [
		{ title: 'Select', widget: select, icon: 'selection', container: 'selectDiv', tool: true },
		{ title: 'Measure', widget: measurement, icon: 'measure', container: 'measureDiv', tool: true },
		{ title: 'Draw', widget: drawWidget, icon: 'pencil-mark', container: 'drawDiv', tool: true },
	];
	actionBar.view = view;
	actionBar.actions = [
		{
			title: 'Property Search',
			widget: propertySearch,
			icon: 'search',
			container: 'propertySearchDiv',
			tool: false,
		},
		{
			title: 'Location Search',
			widget: locationSearch,
			icon: 'pin',
			container: 'locationSearchDiv',
			tool: false,
		},
		{
			title: 'Layers',
			widget: layers,
			icon: 'layers',
			container: 'layerDiv',
			tool: false,
		},
		{
			title: 'Basemaps',
			widget: basemaps,
			icon: 'basemap',
			container: 'basemapDiv',
			tool: false,
		},
		{ title: 'Legend', widget: legend, icon: 'legend', container: 'legendDiv', tool: false },
	];

	const toolactions: Action[] = [...toolbar.actions];
	actionBar.actions = [...actionBar.actions, ...toolactions];
	//view.ui.add(legend, 'bottom-left');
	//view.ui.add(layerList, 'top-right');
	return view;
}
export function loadLayout(): void {
	menu = new Menu({ container: 'menu' });
	debugger;
	toolbar = new ActionBar({
		container: 'leftbar',
		side: 'left',
	});
	actionBar = new ActionBar({
		container: 'rightbar',
		side: 'right',
	});
}

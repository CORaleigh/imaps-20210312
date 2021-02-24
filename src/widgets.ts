/* eslint-disable @typescript-eslint/no-explicit-any */
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
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from '@arcgis/core/views/MapView';
import Fullscreen from '@arcgis/core/widgets/Fullscreen';
import Compass from '@arcgis/core/widgets/Compass';
import Track from '@arcgis/core/widgets/Track';
import Locate from '@arcgis/core/widgets/Locate';
import Print from '@arcgis/core/widgets/Print';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import { Action } from './types/action';

import OverviewMap from './widgets/OverviewMap';
import Clear from './widgets/Clear';
import { Tip } from './types/tip';
import TipManager from './widgets/TipManager';

export let actionBar: ActionBar;
export let toolbar: ActionBar;

export let propertySearch: PropertySearch;
export let select: Select;
export let measurement: Measure;
export let drawWidget: Draw;
export let printWidget: Print;
export let bookmarks: Bookmarks;

export let menu: Menu;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function initWidgets(view: __esri.MapView) {
	createTemplate(view);
	initUiWidgets(view);

	const legend = new Legend({ view });
	const layers = new Layers({ view });
	const basemaps = new BaseMaps({ view: view });
	propertySearch = new PropertySearch({
		view: view,
		condosTable: condosTable,
		addressTable: addressTable,
		propertyLayer: featureLayer,
	});
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
	printWidget = new Print({
		view,
		printServiceUrl:
			'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
	});

	bookmarks = new Bookmarks({ view, editingEnabled: true });

	const locationSearch = new LocationSearch({ view });
	toolbar.view = view;
	toolbar.actions = [
		new Action('Select', select, 'selection', 'selectDiv', true, []),
		new Action('Measure', measurement, 'measure', 'measureDiv', true, []),
		new Action('Draw', drawWidget, 'pencil-mark', 'drawDiv', true, []),
		new Action('Bookmarks', bookmarks, 'bookmark', 'bookmarkDiv', true, []),
		new Action('Print', printWidget, 'print', 'printDiv', true, []),
	];
	actionBar.view = view;
	actionBar.actions = [
		new Action('Property Search', propertySearch, 'search', 'propertySearchDiv', false, [
			new Tip(
				'Wildcard Search',
				'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
			),
			new Tip(
				'Wildcard Search',
				'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
			),
		]),
		new Action('Location Search', locationSearch, 'pin', 'locationSearchDiv', false, [
			new Tip(
				'Location Search',
				'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
			),
		]),
		new Action('Layers', layers, 'layers', 'layerDiv', false, []),
		new Action('Basemaps', basemaps, 'basemap', 'basemapDiv', false, []),
		new Action('Legend', legend, 'legend', 'legendDiv', false, []),
	];

	const toolactions: Action[] = [...toolbar.actions];
	actionBar.actions = [...actionBar.actions, ...toolactions];
	//view.ui.add(legend, 'bottom-left');
	//view.ui.add(layerList, 'top-right');
	return view;
}
function initUiWidgets(view: MapView): void {
	const coordinates: CoordinateConversion = new CoordinateConversion({ view });
	const coordinatesExpand: Expand = new Expand({
		content: coordinates,
		mode: 'floating',
		expandIconClass: 'esri-icon-pan2',
	});
	view.ui.add(coordinatesExpand, 'bottom-left');
	view.ui.add(new Compass({ view: view }), 'top-left');
	const locate: Locate = new Locate({ view: view });
	locate.on('locate-error', (event: any) => {
		console.log(event);
	});
	view.ui.add(locate, 'top-left');

	const track: Track = new Track({ view: view });
	track.on('track-error', (event) => {
		console.log(event);
	});
	view.ui.add(track, 'top-left');
	view.ui.add(new Fullscreen({ view }), 'top-left');
	view.ui.add(new Clear({ view }), 'top-left');

	const overviewMap = new OverviewMap({ view });
	const overviewExpand: Expand = new Expand({
		content: overviewMap,
		mode: 'floating',
		expandIconClass: 'esri-icon-overview-arrow-top-left',
	});
	overviewExpand.watch('expanded', (expanded) => {
		if (expanded) {
			overviewMap.viewModel.overviewMapView.goTo({
				center: view.center,
				scale:
					view.scale *
					2 *
					Math.max(
						view.width / overviewMap.viewModel.overviewMapView.width,
						view.height / overviewMap.viewModel.overviewMapView.height,
					),
			});
		}
	});
	view.ui.add(overviewExpand, 'bottom-right');
}
export function loadLayout(): void {
	const tips = new TipManager({ container: 'tipManager', tips: [], title: '' });
	menu = new Menu({ container: 'menu' });

	toolbar = new ActionBar({
		container: 'leftbar',
		side: 'left',
		tipManager: tips,
	});
	actionBar = new ActionBar({
		container: 'rightbar',
		side: 'right',
		tipManager: tips,
	});
}

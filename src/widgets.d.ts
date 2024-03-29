import Legend from '@arcgis/core//widgets/Legend';
import ActionBar from './widgets/ActionBar';
import PropertySearch from './widgets/PropertySearch';
import LocationSearch from './widgets/LocationSearch';
import BaseMaps from './widgets/BaseMaps';
import Select from './widgets/Select';
import Measure from './widgets/Measure';
import Draw from './widgets/Draw';
import Menu from './widgets/Menu';
import MapView from '@arcgis/core/views/MapView';
import Print from '@arcgis/core/widgets/Print';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import LayerList from './__mocks__/@arcgis/core/widgets/LayerList';
export declare let actionBar: ActionBar;
export declare let toolbar: ActionBar;
export declare let propertySearch: PropertySearch;
export declare let select: Select;
export declare let measurement: Measure;
export declare let drawWidget: Draw;
export declare let printWidget: Print;
export declare let bookmarks: Bookmarks;
export declare let legend: Legend;
export declare let layers: LayerList;
export declare let basemaps: BaseMaps;
export declare let menu: Menu;
export declare let locationSearch: LocationSearch;
export declare function initWidgets(view: __esri.MapView): MapView;
export declare function loadLayout(): Promise<any>;

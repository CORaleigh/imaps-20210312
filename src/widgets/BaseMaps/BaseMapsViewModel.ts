/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Color from '@arcgis/core/Color';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import BaseMapGallery from '@arcgis/core/widgets/BasemapGallery';
import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.BaseMaps.BaseMapsViewModel')
export default class BaseMapsViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	basemaps!: BaseMapGallery;
	images!: BaseMapGallery;

	activeBasemap!: esri.Basemap;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	changePropertyLines = (basemap: esri.Basemap): void => {
		const propertyLayer: FeatureLayer = this.view.map.allLayers.find((layer) => {
			return layer.type === 'feature' && layer.title === 'Property';
		}) as FeatureLayer;
		if (propertyLayer.loaded) {
			const newRenderer: esri.SimpleRenderer = (propertyLayer?.renderer as esri.SimpleRenderer)?.clone() as esri.SimpleRenderer;
			if (
				basemap.title.toLowerCase().includes('dark') ||
				basemap.title.toLowerCase().includes('night') ||
				basemap.title.toLowerCase().includes('dark') ||
				basemap.title.toLowerCase().startsWith('20') ||
				basemap.title.toLowerCase().startsWith('19')
			) {
				(newRenderer.symbol as esri.SimpleFillSymbol).outline.color = new Color([255, 255, 255, 0.5]);
			} else {
				(newRenderer.symbol as esri.SimpleFillSymbol).outline.color = new Color([0, 0, 0, 0.5]);
			}
			propertyLayer.renderer = newRenderer;
		}
	};

	init(view: esri.MapView | esri.SceneView): void {
		this.basemaps = new BaseMapGallery({ view: this.view });
		this.view.when(() => {
			this.changePropertyLines(this.view.map.basemap);
		});
		this.view.map.watch('basemap', (basemap: esri.Basemap) => {
			this.changePropertyLines(basemap);
			if (document.querySelector('#images')?.classList.contains('esri-hidden')) {
				this.activeBasemap.baseLayers.forEach((layer) => {
					this.view.map.remove(this.view.map.findLayerById(layer.id));
				});
				this.activeBasemap = this.view.map.basemap;
				document.querySelector('#blendSwitch')?.removeAttribute('switched');
			}
			const bm = this.images.viewModel.items.find((item) => {
				return item.basemap.title === this.view.map.basemap.title;
			});
			if (bm && document.querySelector('#blendSwitch')?.hasAttribute('switched')) {
				this.view.map.addMany(this.activeBasemap.baseLayers.toArray());
			} else {
				this.activeBasemap.baseLayers.forEach((layer) => {
					this.view.map.remove(this.view.map.findLayerById(layer.id));
				});
			}
		});
		this.activeBasemap = this.view.map.basemap;
		this.images = new BaseMapGallery({
			view: this.view,
			source: {
				query: {
					id: '492386759d264d49948bf7f83957ddb9',
				},
			},
		});
		window.addEventListener('pagehide', () => {
			this.activeBasemap.baseLayers.forEach((layer) => {
				this.view.map.remove(this.view.map.findLayerById(layer.id));
			});
			const json = (view.map as any).toJSON();
			json.initialState.viewpoint.targetGeometry = view.extent;
			window.localStorage.setItem('imaps', JSON.stringify(json));
		});
	}
	toggleContent = (value: string): void => {
		if (value === 'maps') {
			document.querySelector('#maps')?.classList.remove('esri-hidden');
			document.querySelector('#images')?.classList.add('esri-hidden');
			document.querySelector('#mapsItem')?.setAttribute('checked', '');
			document.querySelector('#imagesItem')?.removeAttribute('checked');
			document.querySelector('#blend')?.classList.add('esri-hidden');
			document.querySelector('#blendSlider')?.classList.add('esri-hidden');
		} else {
			document.querySelector('#images')?.classList.remove('esri-hidden');
			document.querySelector('#maps')?.classList.add('esri-hidden');
			document.querySelector('#imagesItem')?.setAttribute('checked', '');
			document.querySelector('#mapsItem')?.removeAttribute('checked');
			document.querySelector('#blend')?.classList.remove('esri-hidden');
		}
	};
}

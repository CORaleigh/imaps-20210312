/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import BaseMapsViewModel from './BaseMaps/BaseMapsViewModel';

export interface BaseMapsProperties extends esri.WidgetProperties {
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget basemaps-base',
};

@subclass('app.widgets.BaseMaps')
export default class BaseMaps extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@aliasOf('viewModel.basemaps')
	basemaps!: esri.BasemapGallery;
	@aliasOf('viewModel.images')
	images!: esri.BasemapGallery;
	@property({
		type: BaseMapsViewModel,
	})
	@renderable()
	viewModel: BaseMapsViewModel = new BaseMapsViewModel();

	constructor(properties?: BaseMapsProperties) {
		super(properties);
	}
	_createMaps = (): void => {
		if (this.basemaps) {
			this.basemaps.container = 'maps';
		}
	};
	_createImages = (): void => {
		if (this.images) {
			this.images.container = 'images';
		}
	};
	handleSwitchChange = (e: any): void => {
		if (e.target.getAttribute('switched') != '') {
			document.querySelector('#blendSlider')?.classList.remove('hidden');
			this.view.map.addMany(this.viewModel.activeBasemap.baseLayers.toArray(), 0);
			this.view.map.basemap.referenceLayers.forEach((layer) => {
				layer.visible = false;
			});
			this.view.map.layers
				.filter((layer) => {
					return this.viewModel.activeBasemap.baseLayers.includes(layer);
				})
				.forEach((layer) => {
					layer.opacity = 0.5;
					layer.visible = true;
				});
		} else {
			document.querySelector('#blendSlider')?.classList.add('hidden');
			this.view.map.basemap.referenceLayers.forEach((layer) => {
				layer.visible = true;
			});
			this.viewModel.activeBasemap.baseLayers.forEach((layer) => {
				this.view.map.remove(this.view.map.findLayerById(layer.id));
			});
		}
	};
	handleSliderChange = (e: any) => {
		const layers = this.view.map.layers
			.filter((layer) => {
				return this.viewModel.activeBasemap?.baseLayers.includes(layer);
			})
			.toArray();
		layers.forEach((layer) => {
			layer.opacity = parseFloat(e.target.getAttribute('value'));
		});
	};

	_sliderCreated = (e: any) => {
		document
			.querySelector('#blendSlider')
			?.addEventListener(
				'calciteSliderUpdate',
				this.handleSliderChange.bind({ basemap: this.basemaps, view: this.view }),
			);
	};
	_blendCreated = (e: any) => {
		document
			.querySelector('#blendSwitch')
			?.addEventListener(
				'calciteSwitchChange',
				this.handleSwitchChange.bind({ basemap: this.basemaps, view: this.view }),
			);

		document.querySelector('#blend')?.removeAttribute('switched');
	};

	render() {
		const items = document.querySelectorAll('#basemapDiv calcite-radio-group-item');
		items.forEach((item) => {
			item?.addEventListener('calciteRadioGroupItemChange', (e: any) => {
				// can I get checked and value like this?
				if (e.target?.checked) {
					this.viewModel.toggleContent(e.target?.value);
				}
			});
		});

		return (
			<div class={CSS.base}>
				<label class="hidden" id="blend">
					<calcite-switch afterCreate={this._blendCreated} id="blendSwitch"></calcite-switch> Blend
				</label>
				<calcite-slider
					afterCreate={this._sliderCreated}
					class="hidden"
					id="blendSlider"
					value="0.5"
					max="1"
					min="0"
					step="0.1"
				></calcite-slider>

				<div afterCreate={this._createMaps} id="maps"></div>
				<div afterCreate={this._createImages} id="images" class="hidden"></div>
				<calcite-radio-group width="full">
					<calcite-radio-group-item checked value="maps" id="mapsItem">
						Maps
					</calcite-radio-group-item>
					<calcite-radio-group-item value="images" id="imagesItem" disabled>
						Imagery
					</calcite-radio-group-item>
				</calcite-radio-group>
			</div>
		);
	}
}

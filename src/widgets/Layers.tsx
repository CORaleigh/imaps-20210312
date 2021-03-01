/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import LayersViewModel from './Layers/LayersViewModel';
import WebMap from '@arcgis/core/WebMap';
import './Layers/styles/Layers.scss';
export interface LayersProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget layers-base',
};

@subclass('app.widgets.Layers')
export default class Layers extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.layerList')
	layerList!: esri.LayerList;

	@property({
		type: LayersViewModel,
	})
	@renderable()
	viewModel: LayersViewModel = new LayersViewModel();

	constructor(properties?: LayersProperties) {
		super(properties);
	}
	filterLayers = (value: string): void => {
		this.layerList.operationalItems.forEach((item: esri.ListItem) => {
			if (item.layer.type === 'group') {
				let open = false;
				(item.layer as esri.GroupLayer).layers.forEach((layer) => {
					if (layer.title.toLowerCase().includes(value.toLowerCase())) {
						layer.listMode = 'show';
						open = true;
					} else {
						layer.listMode = 'hide';
					}
				});
				if (!value.length) {
					item.open = false;
					document
						.querySelector(`#layerDiv_${(item as any).uid}__title`)
						?.parentElement?.parentElement?.parentElement?.classList.remove('hidden');
				} else if (!open) {
					item.open = false;
					document
						.querySelector(`#layerDiv_${(item as any).uid}__title`)
						?.parentElement?.parentElement?.parentElement?.classList.add('hidden');
				} else {
					item.open = true;
					document
						.querySelector(`#layerDiv_${(item as any).uid}__title`)
						?.parentElement?.parentElement?.parentElement?.classList.remove('hidden');
				}
			}
		});
	};
	_createLayers = (): void => {
		if (this.layerList) {
			this.layerList.container = 'layerWidget';
		}
	};
	clearClick = (): void => {
		this.filterLayers('');

		document
			.querySelector('#layerSearch .calcite-input-clear-button')
			?.removeEventListener('click', this.clearClick);
	};
	_createSearch = (input: HTMLElement): void => {
		input.addEventListener(
			'input',
			(e: any) => {
				this.filterLayers(e.target.value);
				input
					.querySelector('.calcite-input-clear-button')
					?.addEventListener('click', this.clearClick, { passive: true });
			},
			{ passive: true },
		);
	};
	_reset = (): void => {
		new WebMap({ portalItem: (this.view.map as esri.WebMap).portalItem.clone() }).load().then((map: WebMap) => {
			map.allLayers.forEach((layer) => {
				this.view.map.findLayerById(layer.id).visible = layer.visible;
				if (layer.type === 'group') {
					(layer as esri.GroupLayer).layers.forEach((layer) => {
						this.view.map.findLayerById(layer.id).visible = layer.visible;
					});
				}
			});
		});
	};
	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div class="flex sticky">
					<calcite-input
						clearable
						placeholder="Filter by layer name"
						scale="s"
						afterCreate={this._createSearch}
						id="layerSearch"
					></calcite-input>
					<calcite-button
						icon-start="viewHide"
						scale="s"
						color="light"
						onclick={this._reset}
					></calcite-button>
				</div>

				<div afterCreate={this._createLayers} id="layerWidget"></div>
			</div>
		);
	}
}

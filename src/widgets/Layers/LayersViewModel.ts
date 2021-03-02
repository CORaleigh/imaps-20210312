/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import LayerList from '@arcgis/core/widgets/LayerList';
@subclass('app.widgets.Layers.LayersViewModel')
export default class LayersViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	layerList!: esri.LayerList;

	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	init(view: esri.MapView | esri.SceneView): void {
		this.layerList = new LayerList({
			view,
			container: 'layerWidget',
			listItemCreatedFunction: (event) => {
				const item = event.item;
				if (item.layer.type != 'group') {
					const slider = document.createElement('calcite-slider');
					slider.setAttribute('min', '0');
					slider.setAttribute('max', '100');
					slider.setAttribute('min-label', '0%');
					slider.setAttribute('max-label', '100%');
					slider.setAttribute('label-handles', '');
					slider.setAttribute('value', (item?.layer.opacity * 100).toString());
					slider.setAttribute('data', item.layer.id);
					slider.addEventListener(
						'calciteSliderUpdate',
						(event) => {
							view.map.findLayerById((event.target as any).getAttribute('data')).opacity =
								parseInt((event?.target as any)?.getAttribute('value')) / 100;
						},
						{ passive: true },
					);
					item.panel = {
						content: [slider, 'legend'],
						open: item.layer.visible,
					};
					if (item.layer.title === 'Property') {
						item.actionsSections = [
							[
								{
									title: 'Show Labels',
									type: 'toggle',
									id: 'property-labels',
									value: item.layer.labelsVisible,
								},
							],
						];
					}
				}
			},
		});
		this.layerList.on('trigger-action', (event) => {
			if (event.action.id === 'property-labels') {
				(event.item.layer as esri.FeatureLayer).labelsVisible = (event.action as esri.ActionToggle).value;
			}
		});
	}
}

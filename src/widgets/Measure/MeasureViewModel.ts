/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Measurement from '@arcgis/core/widgets/Measurement';

@subclass('app.widgets.Measure.MeasureViewModel')
export default class MeasureViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}
	measurement!: esri.Measurement;
	init(view: esri.MapView | esri.SceneView): void {
		this.measurement = new Measurement({ view, areaUnit: 'square-feet', linearUnit: 'feet' });
		this.measurement.watch('activeTool', (activeTool) => {
			if (!activeTool) {
				document.querySelectorAll('.measure-base calcite-radio-group-item').forEach((item: any) => {
					if (item.value === 'clear') {
						item.setAttribute('checked', '');
					} else {
						item.removeAttribute('checked');
					}
				});
			}
		});
	}
}

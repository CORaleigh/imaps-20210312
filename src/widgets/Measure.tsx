/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';
import MeasureViewModel from './Measure/MeasureViewModel';
import './Measure/styles/Measure.scss';

export interface MeasureProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget measure-base',
};

@subclass('app.widgets.Measure')
export default class Measure extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.measurement')
	measurement!: esri.Measurement;

	@property({
		type: MeasureViewModel,
	})
	@renderable()
	viewModel: MeasureViewModel = new MeasureViewModel();

	constructor(properties?: MeasureProperties) {
		super(properties);
	}

	_measureCreated = (): void => {
		if (this.measurement) {
			this.measurement.container = 'measureWidget';
		}
	};

	render(): tsx.JSX.Element {
		const items = document.querySelectorAll('#measureDiv calcite-radio-group-item');
		items.forEach((item) => {
			item?.addEventListener('calciteRadioGroupItemChange', (e: any) => {
				if (!e.target.hasAttribute('checked')) {
					if (e.target?.title === 'clear') {
						this.measurement.clear();
					} else {
						this.measurement.activeTool = e.target?.title;
					}
				}
			});
		});
		return (
			<div class={CSS.base}>
				<calcite-radio-group width="full">
					<calcite-radio-group-item title="distance" value="distance" id="distanceItem" icon="measure">
						Distance
					</calcite-radio-group-item>
					<calcite-radio-group-item title="area" value="area" id="areaItem" icon="measure-area">
						Area
					</calcite-radio-group-item>
					<calcite-radio-group-item title="clear" value="clear" id="clearItem" icon="trash">
						Clear
					</calcite-radio-group-item>
				</calcite-radio-group>
				<div afterCreate={this._measureCreated} id="measureWidget"></div>
			</div>
		);
	}
}

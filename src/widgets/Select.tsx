/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';
import Measurement from '@arcgis/core/widgets/Measurement';

import SelectViewModel from './Select/SelectViewModel';
export interface SelectProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
	layer?: esri.FeatureLayer;
}

const CSS = {
	base: 'esri-widget select-base',
};

@subclass('app.widgets.Select')
export default class Select extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.layer')
	layer!: esri.FeatureLayer;
	@aliasOf('viewModel.sketch')
	sketch!: esri.Sketch;
	@aliasOf('viewModel.bufferDistance')
	bufferDistance!: number;
	@aliasOf('viewModel.measurement')
	measurement!: Measurement;
	@property({
		type: SelectViewModel,
	})
	@renderable()
	viewModel: SelectViewModel = new SelectViewModel();
	_sketchCreated = () => {
		if (!this.viewModel.sketch) {
			this.viewModel.initSketch();
		}
	};
	constructor(properties?: SelectProperties) {
		super(properties);
	}

	handleChange(ev: any): void {
		this.set('bufferDistance', parseInt(ev.target.value));
	}
	render(): tsx.JSX.Element {
		document.querySelector('#selectDiv calcite-input')?.addEventListener('calciteInputBlur', (ev: any) => {
			this.handleChange(ev);
		});

		return (
			<div class={CSS.base}>
				<div afterUpdate={this._sketchCreated} id="selectWidget"></div>
				<calcite-label scale="s">
					Buffer Distance (feet)
					<calcite-input
						scale="s"
						type="number"
						min="0"
						max="2000"
						step="50"
						value={this.viewModel.bufferDistance}
					></calcite-input>
				</calcite-label>
			</div>
		);
	}
}

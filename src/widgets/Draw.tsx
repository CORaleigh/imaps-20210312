/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';
import Color from '@arcgis/core/Color';
import DrawViewModel from './Draw/DrawViewModel';
import Measurement from '@arcgis/core/widgets/Measurement';
export interface DrawProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget draw-base',
};

@subclass('app.widgets.Draw')
export default class Draw extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.label')
	label!: string;
	@aliasOf('viewModel.textColor')
	textColor!: Color;
	@aliasOf('viewModel.measurement')
	measurement!: Measurement;
	@property({
		type: DrawViewModel,
	})
	@renderable()
	viewModel: DrawViewModel = new DrawViewModel();

	constructor(properties?: DrawProperties) {
		super(properties);
	}

	_drawUpdated = (): void => {
		if (!this.viewModel.sketch) {
			this.viewModel.initDraw();
		}
	};

	render(): tsx.JSX.Element {
		const fill = document.querySelector('#fill');
		fill?.setAttribute('value', '#ff0000');
		fill?.addEventListener('calciteColorChange', (e: any) => {
			const hex: string = e.target.value;
			this.viewModel.sketch.viewModel.pointSymbol.color = Color.fromHex(hex);
			this.viewModel.sketch.viewModel.polygonSymbol.color = Color.fromHex(hex);
		});
		const line = document.querySelector('#line');
		line?.setAttribute('value', '#ff0000');
		line?.addEventListener('calciteColorChange', (e: any) => {
			const hex: string = e.target.value;
			this.viewModel.sketch.viewModel.polylineSymbol.color = Color.fromHex(hex);
			(this.viewModel.sketch.viewModel.pointSymbol as esri.SimpleMarkerSymbol).outline.color = Color.fromHex(hex);
			(this.viewModel.sketch.viewModel.polygonSymbol as esri.SimpleFillSymbol).outline.color = Color.fromHex(hex);
		});
		const opacity = document.querySelector('#opacity');
		opacity?.addEventListener('calciteSliderUpdate', (e: any) => {
			this.viewModel.sketch.viewModel.polygonSymbol.color.a = e.target.value;
		});
		const width = document.querySelector('#width');
		width?.addEventListener('calciteSliderUpdate', (e: any) => {
			(this.viewModel.sketch.viewModel.polylineSymbol as esri.SimpleLineSymbol).width = parseFloat(
				e.target.value,
			);
			(this.viewModel.sketch.viewModel.pointSymbol as esri.SimpleMarkerSymbol).outline.width = parseFloat(
				e.target.value,
			);
			(this.viewModel.sketch.viewModel.polygonSymbol as esri.SimpleFillSymbol).outline.width = parseFloat(
				e.target.value,
			);
		});
		const label = document.querySelector('#label');
		label?.addEventListener('calciteInputBlur', (e: any) => {
			this.set('label', e.target.value);
		});
		const textColor = document.querySelector('#textColor');
		textColor?.setAttribute('value', '#ff0000');
		textColor?.addEventListener('calciteColorChange', (e: any) => {
			this.set('textColor', Color.fromHex(e.target.value));
		});
		return (
			<div class={CSS.base}>
				<div afterUpdate={this._drawUpdated} id="sketchDiv"></div>
				<calcite-block heading="Settings" open collapsible>
					<calcite-block-section text="Color">
						<calcite-label scale="s">
							Fill Color{' '}
							<calcite-color
								id="fill"
								hideChannels
								hideSaved
								appearance="minimal"
								scale="s"
							></calcite-color>
						</calcite-label>
						<calcite-label scale="s">
							Line Color{' '}
							<calcite-color
								id="line"
								hideChannels
								hideSaved
								appearance="minimal"
								scale="s"
							></calcite-color>
						</calcite-label>
					</calcite-block-section>
					<calcite-block-section text="Fill Opacity">
						<calcite-label scale="s">
							Opacity
							<calcite-slider
								scale="s"
								id="opacity"
								max="1"
								min="0"
								value="0.5"
								step="0.1"
							></calcite-slider>
						</calcite-label>
					</calcite-block-section>
					<calcite-block-section text="Outline">
						<calcite-label scale="s">
							Width <calcite-slider id="width" max="10" min="0" value="1" step="0.5"></calcite-slider>
						</calcite-label>
					</calcite-block-section>
					<calcite-block-section text="Labeling">
						<calcite-label scale="s">
							Label <calcite-input scale="s" id="label" type="textarea"></calcite-input>
						</calcite-label>
						<calcite-label scale="s">
							Text Color
							<calcite-color
								id="textColor"
								hideChannels
								hideSaved
								appearance="minimal"
								scale="s"
							></calcite-color>
						</calcite-label>
					</calcite-block-section>
				</calcite-block>
			</div>
		);
	}
}

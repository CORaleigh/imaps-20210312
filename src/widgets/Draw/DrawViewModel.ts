/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import Sketch from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Graphic from '@arcgis/core/Graphic';
import TextSymbol from '@arcgis/core/symbols/TextSymbol';

import Color from '@arcgis/core/Color';
import Measurement from '@arcgis/core/widgets/Measurement';
//import { measurement } from '../../widgets';

@subclass('app.widgets.Draw.DrawViewModel')
export default class DrawViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	@property() container!: string;
	measurement!: Measurement;
	sketch!: Sketch;
	graphics!: GraphicsLayer;
	label!: string;
	textColor!: esri.Color;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	initDraw(): void {
		this.graphics = new GraphicsLayer({ listMode: 'hide' });
		this.view.map.add(this.graphics);

		this.sketch = new Sketch({
			view: this.view,
			container: 'sketchDiv',
			layer: this.graphics,
			creationMode: 'single',
			defaultCreateOptions: {
				mode: 'hybrid',
			},
		});
		this.sketch.viewModel.pointSymbol.color = Color.fromHex('#FF0000');
		(this.sketch.viewModel.pointSymbol as any).outline.color = Color.fromHex('#FF0000');
		this.sketch.viewModel.polygonSymbol.color = new Color([[255, 0, 0, 0.5]]);
		(this.sketch.viewModel.polygonSymbol as any).outline.color = Color.fromHex('#FF0000');
		this.sketch.viewModel.polylineSymbol.color = Color.fromHex('#FF0000');

		this.sketch.watch('activeTool', (tool) => {
			if (tool != undefined) {
				this.measurement?.clear();
			}
		});
		this.sketch.on('create', (e) => {
			if (e.state === 'start') {
				this.measurement?.clear();
			}
			if (e.state === 'complete' && this.label?.length) {
				let labelPoint: esri.Geometry = e.graphic.geometry;
				if (e.graphic.geometry.type === 'polygon') {
					labelPoint = (e.graphic.geometry as esri.Polygon).centroid;
				}

				const g = new Graphic({
					geometry: labelPoint,
					symbol: new TextSymbol({
						text: this.label,
						color: this.textColor,
						haloColor: 'white',
						haloSize: 1,
						xoffset: '5px',
						yoffset: '5px',
						verticalAlignment: 'bottom',
						horizontalAlignment: 'right',
					}),
				});
				this.graphics.add(g);
			}
		});
	}
	init(view: esri.MapView | esri.SceneView) {
		console.log(view.scale);
	}
}

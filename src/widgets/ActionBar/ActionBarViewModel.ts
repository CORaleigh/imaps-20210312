import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.ActionBar.ActionBarViewModel')
export default class ActionBarViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	@property() side = '';
	@property() actions: Action[] = [];

	constructor(params?: unknown) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		whenDefinedOnce(this, 'actions', this.actionsLoaded.bind(this));
	}

	actionsLoaded(): void {
		console.log(document.querySelectorAll('calcite-action'));
		document.querySelectorAll('calcite-action').forEach((action) => {
			action.addEventListener('click', (evt) => {
				console.log(evt);
			});
		});
		setTimeout(() => {
			this.changePanel('Property Search');
		});
	}
	@property() changePanel = (name: string): void => {
		const action: Action = this.actions.find((a: Action) => {
			return a.title === name;
		}) as Action;
		if (action?.widget) {
			this.actions.forEach((a: Action) => {
				document.getElementById(a?.container)?.classList.add('esri-hidden');
			});
			action.widget.container = action?.container;

			document.getElementById(action?.container)?.classList.remove('esri-hidden');
			const heading: HTMLElement = document.getElementById(this.side + 'PanelHeading') as HTMLElement;
			heading.innerText = action?.title;
		}
	};

	init(view: esri.MapView | esri.SceneView): void {
		console.log(view.scale);
	}
}

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
		//whenDefinedOnce(this, 'actions', this.actionsLoaded.bind(this));
	}
	changePanel = (name: string): void => {
		const action: Action = this.actions.find((a: Action) => {
			return a.title === name;
		}) as Action;
		if (action?.widget) {
			document.getElementById(this.side + 'Panel')?.removeAttribute('dismissed');
			this.actions.forEach((a: Action) => {
				document.getElementById(a?.container)?.classList.add('esri-hidden');
			});
			action.widget.container = action?.container;

			document.getElementById(action?.container)?.classList.remove('esri-hidden');
			const heading: HTMLElement = document.getElementById(this.side + 'PanelHeading') as HTMLElement;
			heading.innerText = action?.title;
		}
	};
	actionsLoaded = (elm: HTMLElement): void => {
		elm.addEventListener('click', (evt) => {
			const name = (evt.target as HTMLElement).getAttribute('name') as string;
			this.changePanel(name);
			if (window.innerWidth >= 1000) {
				document.querySelectorAll('#rightPanel .tool-container').forEach((container) => {
					document.querySelector('#leftPanel')?.append(container);
				});
			} else {
				document.querySelectorAll('#leftPanel .tool-container').forEach((container) => {
					document.querySelector('#rightPanel')?.append(container);
				});
			}
		});
		setTimeout(() => {
			this.changePanel('Property Search');
		});
	};

	init(view: esri.MapView | esri.SceneView): void {
		console.log(view.scale);
	}
}

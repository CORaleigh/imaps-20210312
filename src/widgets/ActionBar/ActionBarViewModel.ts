import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { watch, whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import { Action } from '../../types/action';
import TipManager from '../TipManager';
@subclass('app.widgets.ActionBar.ActionBarViewModel')
export default class ActionBarViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	@property() side = '';
	@property() actions: Action[] = [];
	title!: string;
	tipManager!: TipManager;
	constructor(params?: unknown) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}
	changePanel = (name: string): void => {
		if (!document.querySelector('calcite-tip-manager')?.getAttribute('closed')) {
			document.querySelector('calcite-tip-manager')?.setAttribute('closed', '');
		}
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

			if (action.title === 'Property Search' && this.side === 'right') {
				document.querySelector('#rightPanel.maximize')?.classList.remove('esri-hidden');
			} else {
				document.querySelector('#rightPanel.maximize')?.classList.add('esri-hidden');
			}
			const tipManager = document.querySelector('calcite-tip-manager');
			(tipManager as HTMLElement).innerHTML = '';
			action.tips.forEach((tip) => {
				const tipElm = document.createElement('calcite-tip');
				tipElm.setAttribute('heading', tip.title);
				tipElm.innerHTML = tip.description;
				tipManager?.appendChild(tipElm);
			});
			if (action?.tips.length > 0) {
				document.querySelector(`#${this.side}Tip`)?.classList.remove('esri-hidden');
			} else {
				document.querySelector(`#${this.side}Tip`)?.classList.add('esri-hidden');
			}
		}
	};
	tipButtonCreated = (elm: HTMLElement): void => {
		elm?.addEventListener('click', () => {
			document.querySelector('calcite-tip-manager')?.removeAttribute('closed');
		});
	};
	actionBarCreated = (): void => {
		watch(this, 'actions', this.initActions.bind(this));
	};

	initActions(): void {
		setTimeout(() => {
			this.changePanel('Property Search');
		});
	}

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
	};

	init(view: esri.MapView | esri.SceneView): void {
		console.log(view.scale);
	}
}

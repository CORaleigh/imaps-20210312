/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import ActionBarViewModel from './ActionBar/ActionBarViewModel';
import './ActionBar/styles/ActonBar.scss';

export interface ActionBarProperties extends esri.WidgetProperties {
	side?: string;
	actions?: Action[];
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget actionbar-base',
};

@subclass('app.widgets.Template')
export default class ActionBar extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@aliasOf('viewModel.side')
	side = '';
	@aliasOf('viewModel.actions')
	actions: Action[] = [];
	@aliasOf('viewModel.title')
	title = '';

	@property({
		type: ActionBarViewModel,
	})
	@renderable()
	viewModel: ActionBarViewModel = new ActionBarViewModel();

	constructor(properties?: ActionBarProperties) {
		super(properties);
	}

	//actionBarCreated = (elm: HTMLElement): void => {
	// elm.addEventListener('click', (evt) => {
	// 	document.getElementById(this.side + 'Panel')?.removeAttribute('dismissed');
	// 	const name = (evt.target as HTMLElement).getAttribute('name') as string;
	// 	this.viewModel.changePanel(name);
	// 	if (window.innerWidth >= 1000) {
	// 		document.querySelectorAll('#rightPanel .tool-container').forEach((container) => {
	// 			document.querySelector('#leftPanel')?.append(container);
	// 		});
	// 	} else {
	// 		document.querySelectorAll('#leftPanel .tool-container').forEach((container) => {
	// 			document.querySelector('#rightPanel')?.append(container);
	// 		});
	// 	}
	// });
	// };
	panelCreated = (): void => {
		// const observer: MutationObserver = new MutationObserver((mutations) => {
		// 	mutations.forEach((mutation) => {
		// 		(mutation.addedNodes[0] as HTMLElement)
		// 			.querySelector('.content-container')
		// 			?.setAttribute('style', 'height:100%;');

		// 		document.querySelectorAll('calcite-panel .heading').forEach((elm: Element) => {
		// 			elm.setAttribute('style', 'margin: 0');
		// 		});
		// 		//(mutation.addedNodes[0] as HTMLElement).innerHTML +=
		// 		//	'<style>.content-container { height: 100%; } .container:focus, .content-container:focus { outline: none; }</style>';
		// 	});
		// });

		// document.querySelectorAll('calcite-panel').forEach((item) => {
		// 	observer.observe(item?.shadowRoot as Node, { childList: true });
		// });
		document.querySelector('.content-container')?.setAttribute('style', 'height:100%;');

		document.querySelectorAll('calcite-panel .heading').forEach((elm: Element) => {
			elm.setAttribute('style', 'margin: 0');
		});
	};

	render(): tsx.JSX.Element {
		window.onresize = () => {
			if (window.innerWidth >= 1000) {
				document.querySelectorAll('#rightPanel .tool-container').forEach((container) => {
					document.querySelector('#leftPanel')?.append(container);
					document.querySelector('#rightPanel')?.setAttribute('dismissed', '');
				});
			} else {
				document.querySelectorAll('#leftPanel .tool-container').forEach((container) => {
					document.querySelector('#leftPanel')?.append(container);
				});
			}
		};
		return (
			<div class={CSS.base + ' ' + this.side}>
				<calcite-panel
					class="panel"
					id={this.side + 'Panel'}
					dir="ltr"
					height-scale="m"
					intl-close="Close"
					theme="light"
					dismissible
					dismissed
				>
					<h3 class="heading" slot="header-content" id={this.side + 'PanelHeading'}></h3>
					<calcite-action
						text="Action"
						label="Action"
						slot="header-actions-end"
						icon="lightbulb"
					></calcite-action>
					{this.actions?.map((action: Action) => {
						if ((this.side === 'right' && !action.tool) || (this.side === 'left' && action.tool)) {
							return (
								<div
									id={action.container}
									key={action.container}
									afterCreate={this.panelCreated}
									class={action.tool ? 'panel-container tool-container' : 'panel-container'}
								></div>
							);
						}
					})}
				</calcite-panel>
				<calcite-action-bar
					expand=""
					dir="ltr"
					intl-expand="Expand"
					intl-collapse="Collapse"
					position="start"
					theme="light"
					calcite-hydrated=""
					id={`${this.side}ActionBar`}
				>
					<calcite-action-group calcite-hydrated="">
						{this.actions?.map((action: Action) => (
							<calcite-action
								key={action?.title}
								text={action?.title}
								label="Add Item"
								icon={action?.icon}
								appearance="solid"
								scale="m"
								calcite-hydrated=""
								name={action?.title}
								afterCreate={this.viewModel.actionsLoaded}
								class={action.tool ? 'tool' : 'action'}
							></calcite-action>
						))}
					</calcite-action-group>
				</calcite-action-bar>
			</div>
		);
	}
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import ActionBarViewModel from './ActionBar/ActionBarViewModel';
import './ActionBar/styles/ActonBar.scss';
import { Action } from '../types/action';
import TipManager from './TipManager';
export interface ActionBarProperties extends esri.WidgetProperties {
	side?: string;
	actions?: Action[];
	view?: esri.MapView | esri.SceneView;
	tipManager?: TipManager;
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
	@aliasOf('viewModel.tipManager')
	tipManager = null;

	@property({
		type: ActionBarViewModel,
	})
	@renderable()
	viewModel: ActionBarViewModel = new ActionBarViewModel();

	constructor(properties?: ActionBarProperties) {
		super(properties);
	}

	panelCreated = (): void => {
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)
					.querySelector('.content-container')
					?.setAttribute('part', 'container');
			});
			observer.disconnect();
		});
		document.querySelectorAll('calcite-panel').forEach((item) => {
			observer.observe(item?.shadowRoot as Node, { childList: true });
			console.log(item?.shadowRoot?.innerHTML);
		});

		document.querySelectorAll('calcite-panel .heading').forEach((elm: Element) => {
			elm.setAttribute('style', 'margin: 0');
		});
	};

	maximizeCreated = (elm: Element): void => {
		elm.addEventListener('click', () => {
			const panel = document.querySelector(`#${this.side}bar`);
			if (panel?.classList.contains('maximized')) {
				elm.querySelector('calcite-icon')?.setAttribute('icon', 'right-edge');

				panel?.classList.remove('maximized');
			} else {
				elm.querySelector('calcite-icon')?.setAttribute('icon', 'left-edge');
				panel?.classList.add('maximized');
			}
			//workaround to handle tab indicator not repositioning after resize of panel
			document.querySelector('calcite-tab:not([active])')?.classList.add('esri-hidden');
			document.querySelector('calcite-tab-title:not([active])')?.dispatchEvent(new MouseEvent('click'));
			setTimeout(() => {
				document.querySelector('calcite-tab-title:not([active])')?.dispatchEvent(new MouseEvent('click'));
				document.querySelector('calcite-tab.esri-hidden')?.classList.remove('esri-hidden');
			}, 100);
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
					afterCreate={this.panelCreated}
				>
					<h3 class="heading" slot="header-content" id={this.side + 'PanelHeading'}></h3>
					<calcite-action
						class="maximize"
						text="Action"
						label="Action"
						slot="header-actions-end"
						icon="left-edge"
						afterCreate={this.maximizeCreated}
					></calcite-action>
					<calcite-action
						id={`${this.side}Tip`}
						class="tip-button"
						text="Action"
						label="Action"
						slot="header-actions-end"
						icon="lightbulb"
						afterCreate={this.viewModel.tipButtonCreated}
					></calcite-action>
					{this.actions?.map((action: Action) => {
						if ((this.side === 'right' && !action.tool) || (this.side === 'left' && action.tool)) {
							return (
								<div
									id={action.container}
									key={action.container}
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
					afterCreate={this.viewModel.actionBarCreated}
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

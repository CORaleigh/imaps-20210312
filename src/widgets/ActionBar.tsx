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

	activeWidget: any = null;
	constructor(properties?: ActionBarProperties) {
		super(properties);
	}
	actionBarCreated = (elm: HTMLElement): void => {
		elm.addEventListener('click', (evt) => {
			document.getElementById(this.side + 'Panel')?.removeAttribute('dismissed');
			const name = (evt.target as HTMLElement).getAttribute('name');
			const action: Action = this.actions.find((a: Action) => {
				return a.title === name;
			}) as Action;
			this.actions.forEach((a: Action) => {
				document.getElementById(a?.container)?.classList.add('esri-hidden');
			});
			this.activeWidget = action?.widget;
			action.widget.container = action?.container;

			document.getElementById(action?.container)?.classList.remove('esri-hidden');
			const heading: HTMLElement = document.getElementById(this.side + 'PanelHeading') as HTMLElement;
			heading.innerText = action?.title;
			//document.getElementById(action?.container)?.classList.remove('esri-hidden');
		});
	};
	panelCreated = (): void => {
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)
					.querySelector('.content-container')
					?.setAttribute('style', 'height:100%;');
				//(mutation.addedNodes[0] as HTMLElement).innerHTML +=
				//	'<style>.content-container { height: 100%; } .container:focus, .content-container:focus { outline: none; }</style>';
			});
		});

		document.querySelectorAll('calcite-panel').forEach((item) => {
			observer.observe(item?.shadowRoot as Node, { childList: true });
		});
	};
	render(): tsx.JSX.Element {
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
						icon="attachment"
					></calcite-action>
					{this.actions?.map((action: Action) => (
						<div
							id={action.container}
							class={action.active ? 'esri-hidden' : ''}
							afterCreate={this.panelCreated}
						></div>
					))}
				</calcite-panel>
				<calcite-action-bar
					expand=""
					dir="ltr"
					intl-expand="Expand"
					intl-collapse="Collapse"
					position="start"
					theme="light"
					calcite-hydrated=""
				>
					<calcite-action-group calcite-hydrated="">
						{this.actions?.map((action: Action) => (
							<calcite-action
								text={action?.title}
								label="Add Item"
								icon={action?.icon}
								appearance="solid"
								scale="m"
								calcite-hydrated=""
								name={action?.title}
								afterCreate={this.actionBarCreated}
							></calcite-action>
						))}
					</calcite-action-group>
				</calcite-action-bar>
			</div>
		);
	}
}

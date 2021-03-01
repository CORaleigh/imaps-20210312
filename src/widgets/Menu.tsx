/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import MenuViewModel from './Menu/MenuViewModel';
import './Menu/styles/Menu.scss';
export interface MenuProperties extends esri.WidgetProperties {
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget menu-base',
};

@subclass('app.widgets.Menu')
export default class Menu extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	theme = 'light';
	@property({
		type: MenuViewModel,
	})
	@renderable()
	viewModel: MenuViewModel = new MenuViewModel();

	setTheme = (value: string): void => {
		this.theme = value;
		window.localStorage.setItem('theme', value);
		document.body.classList.remove(value == 'light' ? 'dark' : 'light');

		document.body.classList.add(value);
		const style = Array.prototype.slice.call(document.querySelectorAll('link')).filter((link) => {
			return link.href.includes('light') || link.href.includes('dark');
		});
		if (style) {
			style.forEach((s) => {
				s.remove();
			});

			const preload = document.createElement('link');
			preload.href = `./assets/esri/themes/${this.theme}/main.css`;
			preload.setAttribute('rel', 'preload');
			preload.setAttribute('type', 'text/css');
			document.querySelector('head')?.append(preload);
			const link = document.createElement('link');
			link.href = `./assets/esri/themes/${this.theme}/main.css`;
			link.setAttribute('rel', 'stylesheet');
			link.setAttribute('type', 'text/css');
			document.querySelector('head')?.append(link);
			document.querySelectorAll('calcite-panel').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-color').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-tip-manager').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-dropdown').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-alert').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-modal').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-block').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			document.querySelectorAll('calcite-pick-list').forEach((item) => {
				item.setAttribute('theme', this.theme);
			});
			setTimeout(() => {
				document.querySelectorAll('calcite-action-bar').forEach((item) => {
					item.setAttribute('theme', this.theme);
				});
			});
		}
	};

	menuCreated = (): void => {
		if (window.localStorage.getItem('theme')) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const value: string = window.localStorage.getItem('theme')!;
			requestAnimationFrame(() => {
				this.setTheme(value);
			});
		}
		document.querySelector('calcite-dropdown')?.addEventListener(
			'calciteDropdownSelect',
			(e: any) => {
				const value: string = e.currentTarget.selectedItems[0]?.innerHTML.toLowerCase();
				this.setTheme(value);
			},
			{ passive: true },
		);
	};
	constructor(properties?: MenuProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<header class="header">
					<h2 class="heading">iMAPS</h2>
					<div id="menu"></div>
					<calcite-dropdown alignment="end" afterCreate={this.menuCreated}>
						<calcite-button slot="dropdown-trigger">
							<calcite-icon icon="hamburger"></calcite-icon>
						</calcite-button>
						<calcite-dropdown-group group-title="Help" selection-mode="none">
							<calcite-dropdown-item>Help Document</calcite-dropdown-item>
							<calcite-dropdown-item rel="noreferrer" href="https://arcg.is/1GurDS" target="_blank">
								Feedback
							</calcite-dropdown-item>
						</calcite-dropdown-group>
						<calcite-dropdown-group group-title="Data Download" selection-mode="none">
							<calcite-dropdown-item
								rel="noreferrer"
								href="https://data-wake.opendata.arcgis.com/"
								target="_blank"
							>
								Wake County Open Data
							</calcite-dropdown-item>
							<calcite-dropdown-item rel="noreferrer" href="https://data.raleighnc.gov/" target="_blank">
								Raleigh Open Data
							</calcite-dropdown-item>
						</calcite-dropdown-group>
						<calcite-dropdown-group group-title="Links" selection-mode="none">
							<calcite-dropdown-item rel="noreferrer" href="https://data.raleighnc.gov/" target="_blank">
								RaleighNC.gov
							</calcite-dropdown-item>
							<calcite-dropdown-item rel="noreferrer" href="https://wakegov.com/" target="_blank">
								WakeGOV.com
							</calcite-dropdown-item>
						</calcite-dropdown-group>
						<calcite-dropdown-group group-title="Theme" selection-mode="single">
							<calcite-dropdown-item active={this.theme === 'dark'} value="dark">
								Dark
							</calcite-dropdown-item>
							<calcite-dropdown-item active={this.theme === 'light'} value="light">
								Light
							</calcite-dropdown-item>
						</calcite-dropdown-group>
					</calcite-dropdown>
				</header>
			</div>
		);
	}
}

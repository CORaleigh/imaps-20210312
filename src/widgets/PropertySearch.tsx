/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';
import PropertySearchViewModel from './PropertySearch/PropertySearchViewModel';
import './PropertySearch/styles/PropertySearch.scss';
export interface PropertySearchProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
	propertyLayer?: esri.FeatureLayer;
	condosTable?: esri.FeatureLayer;
	addressTable?: esri.FeatureLayer;
}

const CSS = {
	base: 'esri-widget propertysearch-base',
};
@subclass('app.widgets.PropertySearch')
export default class PropertySearch extends Widget {
	@aliasOf('viewModel.view')
	view: esri.MapView | esri.SceneView | undefined;
	@aliasOf('viewModel.condosTable')
	condosTable: esri.FeatureLayer | undefined;
	@aliasOf('viewModel.addressTable')
	addressTable: esri.FeatureLayer | undefined;
	@aliasOf('viewModel.propertyLayer')
	propertyLayer: esri.FeatureLayer | undefined;
	@aliasOf('viewModel.searchWidget')
	searchWidget: esri.widgetsSearch | undefined;
	@aliasOf('viewModel.featureTable')
	featureTable: esri.FeatureTable | undefined;
	@aliasOf('viewModel.feature')
	feature: esri.Feature | undefined;
	@aliasOf('viewModel.geometry')
	geometry: esri.Geometry | undefined;
	@aliasOf('viewModel.detailsDisabled')
	detailsDisabled = true;
	@property({
		type: PropertySearchViewModel,
	})
	@renderable()
	viewModel: PropertySearchViewModel = new PropertySearchViewModel();

	constructor(properties?: PropertySearchProperties) {
		super(properties);
	}

	_createSearch = (): void => {
		if (this.searchWidget) {
			this.searchWidget.container = 'search';
		}
	};
	_createTable = (): void => {
		if (this.featureTable) {
			this.featureTable.container = 'table';
		}
	};
	_createFeature = (): void => {
		if (this.feature) {
			this.feature.container = 'featureDiv';
		}
	};

	_navCreated = (elm: Element): void => {
		elm.innerHTML += '<style>:focus { outline: none; }</style>';
	};

	currentRadioButton = 'list';

	render(): tsx.JSX.Element {
		const items = document.querySelectorAll('#sideDiv calcite-radio-group-item');
		items.forEach((item) => {
			item?.addEventListener('calciteRadioGroupItemChange', (e: any) => {
				// can I get checked and value like this?
				if (e.target?.checked) {
					this.viewModel.toggleContent(e.target?.value);
				}
			});
		});
		const featDiv = document.querySelector('#featureDiv') as HTMLElement;

		document.querySelector('#scrollArrow')?.addEventListener('click', () => {
			featDiv?.scrollBy({ top: featDiv.offsetHeight, behavior: 'smooth' });
		});
		const theme = window.localStorage.getItem('theme');
		if (theme) {
			document.querySelector('#arrowPath')?.setAttribute('stroke', theme === 'light' ? 'black' : 'white');
		}

		featDiv?.addEventListener('scroll', () => {
			if (featDiv.scrollTop >= featDiv.scrollHeight - featDiv.offsetHeight - 1) {
				document.querySelector('#scrollArrow')?.classList.add('hidden');
			} else {
				document.querySelector('#scrollArrow')?.classList.remove('hidden');
			}
		});
		return (
			<div class={CSS.base}>
				<div afterCreate={this._createSearch} id="search"></div>
				<calcite-tabs layout="center" position="below" calcite-hydrated="">
					<calcite-tab-nav slot="tab-nav" role="tablist" layout="center" position="below" calcite-hydrated="">
						<calcite-tab-title
							active
							aria-expanded="true"
							dir="ltr"
							hastext=""
							id="listTabTitle"
							role="tab"
							tabindex="0"
							layout="center"
							position="below"
							calcite-hydrated=""
							afterCreate={this._navCreated}
						>
							List
						</calcite-tab-title>
						<calcite-tab-title
							aria-expanded="false"
							dir="ltr"
							hastext=""
							id="detailsTabTitle"
							role="tab"
							tabindex="0"
							layout="center"
							position="below"
							calcite-hydrated=""
							disabled
							afterCreate={this._navCreated}
						>
							Details
						</calcite-tab-title>
					</calcite-tab-nav>

					<calcite-tab aria-expanded="true" id="listTab" role="tabpanel" calcite-hydrated="">
						<div afterCreate={this._createTable} id="table"></div>
					</calcite-tab>
					<calcite-tab aria-expanded="false" id="detailsTab" role="tabpanel" calcite-hydrated="">
						<div id="feature">
							<div id="featureDiv" afterCreate={this._createFeature}></div>
							<div
								id="scrollArrow"
								class="home-page__scroll-down-arrow home-page__scroll-down-arrow--black"
								data-dojo-attach-point="arrowContainer"
							>
								<svg viewBox="0 0 32 32" width="32" height="32" class="icon-inline  ">
									<path
										id="arrowPath"
										stroke="black"
										stroke-opacity="0.5"
										d="M16.5 27.207l-4.854-4.854.707-.707L16 25.293V5h1v20.293l3.646-3.646.707.707z"
									></path>
								</svg>
							</div>
						</div>
					</calcite-tab>
				</calcite-tabs>

				{/* <calcite-radio-group width="full">
          <calcite-radio-group-item checked value="table" id="tableItem">
            List
          </calcite-radio-group-item>
          <calcite-radio-group-item value="feature" id="featureItem" disabled>
            Details
          </calcite-radio-group-item>
        </calcite-radio-group> */}
			</div>
		);
	}
}

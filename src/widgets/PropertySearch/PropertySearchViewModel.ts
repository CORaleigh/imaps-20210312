/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import Search from '@arcgis/core/widgets/Search';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Feature from '@arcgis/core/widgets/Feature';
import Graphic from '@arcgis/core/Graphic';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';
import FieldColumnConfig from '@arcgis/core/widgets/FeatureTable/FieldColumnConfig';
import MenuButtonItem from '@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem';
import { whenDefinedOnce, whenDefined } from '@arcgis/core/core/watchUtils';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
@subclass('app.widgets.PropertySearch.PropertySearchViewModel')
export default class PropertySearchViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	@property() condosTable!: esri.FeatureLayer;
	@property() addressTable!: esri.FeatureLayer;
	@property() propertyLayer!: esri.FeatureLayer;

	@property() searchWidget!: esri.widgetsSearch;
	@property() featureTable!: esri.FeatureTable;
	@property() feature!: esri.Feature;
	@property() geometry!: esri.Geometry;
	@property() detailsDisabled = true;
	clusterPoints!: FeatureLayer;

	graphics = new GraphicsLayer({ id: 'property-select', listMode: 'hide', minScale: 19200 });
	singleSymbol = new SimpleFillSymbol({
		style: 'none',
		outline: { width: 2.5, color: [255, 82, 82, 1] },
		color: [253, 46, 65, 0.25],
	});
	multiSymbol = new SimpleFillSymbol({
		style: 'none',
		outline: { width: 2.5, color: [249, 243, 0, 1] },
		color: [253, 46, 65, 0.25],
	});
	selectedProperty!: esri.Graphic;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		whenDefinedOnce(this, 'condosTable', this.initSearch.bind(this));
		whenDefined(this, 'geometry', this.searchByGeometry.bind(this));
	}

	searchByGeometry(geometry: esri.Geometry): void {
		this.propertyLayer
			.queryFeatures({ geometry: geometry, returnGeometry: true, outFields: ['OBJECTID', 'REID'] })
			.then((propertyResult) => {
				const relationship = this.propertyLayer.relationships.find((r) => {
					return r.name === 'PROPERTY_CONDO';
				});
				const oids: number[] = [];
				propertyResult.features.forEach((f) => {
					oids.push(f.getObjectId());
				});
				this.propertyLayer
					.queryRelatedFeatures({ relationshipId: relationship?.id, objectIds: oids, outFields: ['*'] })
					.then((result) => {
						let features: Graphic[] = [];
						console.log('relatedFeatures', result);
						for (const key in result) {
							features = features.concat(result[key].features);
						}
						if (features.length === 1) {
							features[0].geometry = propertyResult.features[0].geometry;

							this.setFeature(
								features[0],
								this.view as esri.MapView,
								[],
								[features[0].getAttribute('OBJECTID')],
							);
							this.toggleContent('details');
						} else {
							this.toggleContent('list');
						}

						this.graphics.removeAll();

						const featureSet: FeatureSet = new FeatureSet({ features: [] });
						propertyResult.features.forEach((feature: esri.Graphic) => {
							feature.symbol = propertyResult.features.length > 1 ? this.multiSymbol : this.singleSymbol;

							if (propertyResult.features.length === 1) {
								feature.geometry = propertyResult.features[0].geometry;
							}
							this.graphics.add(feature);
							featureSet.features.push(feature);
						});
						this.featureTable.layer = this.createFeatureTableLayer(this.condosTable.fields, features);
						this.featureTable.refresh();

						this.addClusterGraphics(featureSet);
					});
			});
	}

	createFeatureTableLayer = (fields: esri.Field[], features: esri.Graphic[]): FeatureLayer => {
		// console.log(features);
		return new FeatureLayer({
			fields: fields,
			source: features,
			title: 'Selected properties',
			geometryType: 'point',
			objectIdField: 'OBJECTID',
			spatialReference: this.view.spatialReference,
		});
	};
	addClusterGraphics = (result: esri.FeatureSet): void => {
		const points: Graphic[] = [];
		result.features.forEach((feature) => {
			const pt = feature.clone();
			pt.geometry = (pt.geometry as esri.Polygon).centroid;
			points.push(pt);
		});
		this.clusterPoints
			.queryFeatures({ where: '1=1', returnGeometry: false, outFields: ['OBJECTID'] })
			.then((result) => {
				this.clusterPoints.applyEdits({ deleteFeatures: result.features }).then(() => {
					this.clusterPoints.applyEdits({ addFeatures: points }).then(() => {
						this.clusterPoints.refresh();
					});
				});
			});
	};
	addGraphics = (result: esri.FeatureSet): void => {
		this.graphics.removeAll();
		result.features.forEach((feature) => {
			feature.symbol = result.features.length > 1 ? this.multiSymbol : this.singleSymbol;
			this.graphics.add(feature);
		});

		this.addClusterGraphics(result);
	};

	getProperty = (oids: number[], source?: string): void => {
		const relationship = this.condosTable.relationships.find((r) => {
			return r.name === 'CONDO_PROPERTY';
		});
		this.condosTable
			.queryRelatedFeatures({
				relationshipId: relationship?.id,
				objectIds: oids,
				outFields: ['OBJECTID', 'REID'],
				returnGeometry: false,
			})
			.then((result) => {
				const oids: number[] = [];
				for (const key in result) {
					result[key].features.forEach((feature: esri.Graphic) => {
						oids.push(feature.getAttribute('OBJECTID'));
					});
				}
				this.propertyLayer
					.queryFeatures({
						objectIds: oids,
						outFields: ['*'],
						returnGeometry: true,
						outSpatialReference: { wkid: 102100 },
					})
					.then((result) => {
						if (this.feature?.graphic) {
							this.feature.graphic.geometry = result?.features[0].geometry;
						}
						this.view.goTo(result.features);

						if (!source) {
							this.addGraphics(result);
						}
					});
			});
	};

	searchComplete = (event: esri.SearchSearchCompleteEvent): void => {
		
		if (!this.searchWidget.viewModel.selectedSuggestion) {
			const oids: number[] = [];

			let where = '';

			if (!this.searchWidget.activeSource) {
				where = `OWNER like '_${event.searchTerm.toUpperCase()}%' OR REID like '${event.searchTerm.toUpperCase()}%' OR PIN_NUM like '${event.searchTerm.toUpperCase()}%'`;
			} else {
				if ((this.searchWidget.activeSource as LayerSearchSource)?.searchFields.includes('OWNER')) {
					where = `OWNER like '_%${event.searchTerm.toUpperCase()}%'`;
				}
				if ((this.searchWidget.activeSource as LayerSearchSource)?.searchFields.includes('PIN_NUM')) {
					where = `PIN_NUM like '%${event.searchTerm.toUpperCase()}%'`;
				}
				if ((this.searchWidget.activeSource as LayerSearchSource)?.searchFields.includes('REA_REID')) {
					where = "REA_REID like '%" + event.searchTerm.toUpperCase() + "%'";
				}
			}

			let tableFeatures: Graphic[] = [];
			this.condosTable.queryFeatures({ where: where, outFields: ['*'] }).then((result) => {
				tableFeatures = result.features;
				result.features.forEach((f) => {
					oids.push(f.getObjectId());
				});
				if (
					!this.searchWidget.activeSource ||
					(this.searchWidget.activeSource as LayerSearchSource)?.searchFields.includes('ADDRESS')
				) {
					where = `ADDRESS like '%${event.searchTerm.toUpperCase()}%'`;
				} else {
					where = 'ADDRESS IS NULL';
				}

				this.addressTable.queryFeatures({ where: where, outFields: ['*'] }).then((result) => {
					const relationship = this.addressTable.relationships.find((r) => {
						return r.name === 'ADDRESSES_CONDO';
					});
					const addrOids: number[] = [];
					result.features.forEach((f) => {
						addrOids.push(f.getObjectId());
					});
					if (relationship && addrOids.length) {
						this.addressTable
							.queryRelatedFeatures({
								relationshipId: relationship.id,
								objectIds: addrOids,
								outFields: ['*'],
							})
							.then((result) => {
								for (const key in result) {
									result[key].features.forEach((feature: esri.Graphic) => {
										oids.push(feature.getAttribute('OBJECTID'));
										tableFeatures.push(feature);
									});
								}
								this.featureTable.layer = this.createFeatureTableLayer(
									this.condosTable.fields,
									tableFeatures,
								);

								this.getProperty(oids);
								if (tableFeatures.length > 1) {
									this.feature.graphic = new Graphic();

									this.toggleContent('list');
								} else {
									this.detailsDisabled = true;
									this.toggleContent('details');
								}
								this.featureTable.renderNow();
							});
					} else {
						this.getProperty(oids);
						this.featureTable.layer = this.createFeatureTableLayer(this.condosTable.fields, tableFeatures);
						if (tableFeatures.length > 1) {
							this.feature.graphic = new Graphic();
							document.querySelector('#detailsTabTitle')?.setAttribute('disabled', '');
							document.querySelector('#listTabTitle')?.dispatchEvent(new MouseEvent('click'));
							this.toggleContent('list');
						}
						this.featureTable.renderNow();
					}
				});
			});
		} else {
			if (event.numResults) {
				let layer = (event.results[0].source as LayerSearchSource).layer as FeatureLayer;
				if (!layer && event.results[0].source.name === 'Owner') {
					layer = this.condosTable;
				}
				if (!layer && ['Site Address', 'Street Name'].includes(event.results[0].source.name)) {
					layer = this.addressTable;
				}
				const oids: number[] = [];
				event.results[0].results.forEach((r) => {
					oids.push(r.feature.getObjectId());
				});
				if (layer?.layerId === 4) {
					// const relationship = layer.relationships.find((r) => {
					// 	return r.name === 'ADDRESSES_CONDO';
					// });
					// if (relationship && oids) {
					this.condosTable
						.queryFeatures({
							//relationshipId: relationship.id,
							//objectIds: oids,
							where: `${
								(event.results[0].source as LayerSearchSource).name === 'Street Name'
									? 'FULL_STREET_NAME'
									: 'SITE_ADDRESS'
							} = '${event.searchTerm}'`,
							outFields: ['*'],
						})
						.then((result) => {
							const oids: number[] = [];
							const features: Graphic[] = [];
							// for (const key in result) {
							// 	result[key].features.forEach((feature: esri.Graphic) => {
							// 		oids.push(feature.getAttribute('OBJECTID'));
							// 		features.push(feature);
							// 		feature.layer = this.condosTable;
							// 	});
							// }
							result.features.forEach((feature: esri.Graphic) => {
								oids.push(feature.getAttribute('OBJECTID'));
								features.push(feature);
								feature.layer = this.condosTable;
							});
							this.getProperty(oids);
							if (features.length > 1) {
								this.feature.graphic = new Graphic();
								document.querySelector('#detailsTabTitle')?.setAttribute('disabled', '');
								document.querySelector('#listTabTitle')?.dispatchEvent(new MouseEvent('click'));
								this.toggleContent('list');
							} else {
								this.setFeature(features[0], this.view as esri.MapView, [], oids);
								this.toggleContent('details');
							}

							this.featureTable.layer = this.createFeatureTableLayer(this.condosTable.fields, features);
						});
					//}
				} else {
					this.condosTable.queryFeatures({ objectIds: oids, outFields: ['*'] }).then((result) => {
						const oids: number[] = [];
						result.features.forEach((feature: esri.Graphic) => {
							oids.push(feature.getAttribute('OBJECTID'));
						});

						this.getProperty(oids);

						if (result.features.length > 1) {
							this.feature.graphic = new Graphic();
							document.querySelector('#detailsTabTitle')?.setAttribute('disabled', '');
							document.querySelector('#listTabTitle')?.dispatchEvent(new MouseEvent('click'));
							this.toggleContent('list');
						} else {
							this.setFeature(result.features[0], this.view as esri.MapView, [], oids);
							this.toggleContent('details');
						}
						this.featureTable.layer = this.createFeatureTableLayer(
							this.condosTable.fields,
							result.features,
						);
					});
				}
			}
		}
	};
	setFeature(feature: esri.Graphic, view: esri.MapView, mediaInfos: any[], oids: number[]): void {
		const params = new URL(document.location.href).searchParams;
		params.set('reid', feature.getAttribute('REID'));
		window.history.replaceState({}, '', `${location.pathname}?${params}`);
		const relationship = this.condosTable.relationships.find((r) => {
			return r.name === 'CONDO_PHOTOS';
		});
		const oid = feature.getAttribute('OBJECTID');
		mediaInfos = [];
		this.condosTable
			.queryRelatedFeatures({ relationshipId: relationship?.id, objectIds: oids, outFields: ['*'] })
			.then((result) => {
				for (const key in result) {
					result[key].features.forEach((feature: esri.Graphic) => {
						mediaInfos.push({
							title: '',
							type: 'image',
							caption: '',
							value: {
								sourceURL: `https://services.wakegov.com/realestate/photos/mvideo/${feature.getAttribute(
									'IMAGEDIR',
								)}/${feature.getAttribute('IMAGENAME')}`,
							},
						});
					});
				}
				const media = (this.condosTable.popupTemplate.content as esri.Content[]).find(
					(content: esri.Content) => {
						return content?.type === 'media';
					},
				);
				if (media) {
					(media as esri.MediaContent).mediaInfos = mediaInfos;
				}
				feature.layer = this.condosTable;
				feature.popupTemplate = (feature.layer as esri.FeatureLayer).popupTemplate;
				this.feature.graphic = feature;
				if (this.feature.graphic) {
					document.querySelector('#detailsTabTitle')?.removeAttribute('disabled');
					document.querySelector('#detailsTabTitle')?.dispatchEvent(new MouseEvent('click'));
				}
				document.querySelector('#featureDiv')?.scrollTo({ top: 0, behavior: 'smooth' });
				this.feature.graphic.symbol = this.singleSymbol;
				this.feature.graphic.setAttribute('OBJECTID', oid);
				const selected = this.graphics.graphics.find((graphic) => {
					return graphic.getAttribute('selected') === 'true';
				});
				if (selected) {
					selected.symbol = this.multiSymbol;
					selected.setAttribute('selected', 'false');
				}
				const graphic = this.graphics.graphics.find((graphic) => {
					return graphic.getAttribute('REID') === feature.getAttribute('REID');
				});
				if (graphic) {
					graphic.symbol = this.singleSymbol;

					graphic.setAttribute('selected', 'true');
					this.graphics.graphics.reorder(graphic, this.graphics.graphics.length - 1);
				}
			});
	}
	exportTable(): void {
		this.featureTable.layer.queryFeatures({ outFields: ['*'] }).then((result) => {
			let csv = '';
			result.fields.forEach((field) => {
				csv += `${field.alias},`;
			});
			csv += '\r\n';
			result.features.forEach((feature) => {
				for (const key in feature.attributes) {
					if (key.toLowerCase().includes('date')) {
						csv += `"${new Date(feature.attributes[key]).toDateString()}",`;
					} else if (key.toLowerCase().includes('acres')) {
						csv += `"${parseFloat(feature.attributes[key]).toFixed(2)}",`;
					} else {
						csv += `"${feature.attributes[key]}",`;
					}
				}
				csv += '\r\n';
			});
			const exportedFilenmae = 'imaps_export.csv';

			const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
			const link = document.createElement('a');
			if (link.download !== undefined) {
				// feature detection
				// Browsers that support HTML5 download attribute
				const url = URL.createObjectURL(blob);
				link.setAttribute('href', url);
				link.setAttribute('download', exportedFilenmae);
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		});
	}

	checkSearchParams = () => {
		const params = new URL(document.location.href).searchParams;
		const reid = params.get('reid');
		const pin = params.get('pin');
		let where = '';
		if (reid || pin) {
			if (reid) {
				where = `REID IN ('${reid.split(',').join("','")}')`;
			} else if (pin) {
				where = `PIN_NUM = '${pin}'`;
			}
			this.condosTable.queryFeatures({ where: where, outFields: ['*'] }).then((result) => {
				const oids: number[] = [];
				result.features.forEach((feature: esri.Graphic) => {
					oids.push(feature.getAttribute('OBJECTID'));
				});

				this.getProperty(oids);

				if (result.features.length > 1) {
					this.feature.graphic = new Graphic();
					document.querySelector('#detailsTabTitle')?.setAttribute('disabled', '');
					document.querySelector('#listTabTitle')?.dispatchEvent(new MouseEvent('click'));
					this.toggleContent('list');
				} else {
					this.setFeature(result.features[0], this.view as esri.MapView, [], oids);
					this.toggleContent('details');
				}
				this.featureTable.layer = this.createFeatureTableLayer(this.condosTable.fields, result.features);
			});
		}
	};
	init(view: esri.MapView | esri.SceneView) {
		view.map.add(this.graphics, view.map.allLayers.length - 1);
		this.clusterPoints = new FeatureLayer({
			source: [],
			objectIdField: 'OBJECTID',
			geometryType: 'point',
			maxScale: 19201,
			listMode: 'hide',
			legendEnabled: false,
			renderer: {
				type: 'simple',
				symbol: {
					type: 'simple-marker',
					size: 4,
					color: '#69dcff',
					outline: {
						color: 'rgba(0, 139, 174, 0.5)',
						width: 5,
					},
				},
			} as any,
			featureReduction: {
				type: 'cluster',
				labelingInfo: [
					{
						// turn off deconfliction to ensure all clusters are labeled
						deconflictionStrategy: 'none',
						labelExpressionInfo: {
							expression: "Text($feature.cluster_count, '#,###')",
						},
						symbol: {
							type: 'text',
							color: '#004a5d',
							font: {
								weight: 'bold',
								family: 'Noto Sans',
								size: '12px',
							},
						} as any,
						labelPlacement: 'center-center',
					},
				],
			},
			spatialReference: this.view.spatialReference,
		});
		this.view.map.add(this.clusterPoints);
		this.checkSearchParams();
	}

	getSuggestions = (
		params: any,
		name: string,
		layer: esri.FeatureLayer,
		outFields: string[],
		orderByFields: string[],
		searchFields: string[],
		startsWith: boolean,
	) => {
		const whereArray: string[] = [];
		//test
		searchFields.forEach((field) => {
			if (startsWith) {
				whereArray.push(`${field} LIKE '${params.suggestTerm.toUpperCase()}%'`);
			} else {
				whereArray.push(`${field} LIKE '%${params.suggestTerm.toUpperCase()}%'`);
			}
		});
		return layer
			.queryFeatures({
				returnDistinctValues: true,
				outFields: outFields,
				returnGeometry: false,
				orderByFields: orderByFields,
				where: whereArray.join(' OR '),
			})
			.then((results) => {
				return results.features.map((feature) => {
					return {
						key: name,
						text: feature.getAttribute(outFields[0]),
						sourceIndex: params.sourceIndex,
					};
				});
			});
	};
	initSearch() {
		const tableLayer = new FeatureLayer({
			fields: [
				{ name: 'SITE_ADDRESS', type: 'string', alias: 'Address' },
				{ name: 'OWNER', type: 'string', alias: 'Owner' },
				{ name: 'PIN_NUM', type: 'string', alias: 'PIN' },
				{ name: 'REID', type: 'string', alias: 'REID' },
			],
			source: [],
			title: 'Selected properties',
			geometryType: 'point',
			objectIdField: 'OBJECTID',
			spatialReference: this.view.spatialReference,
			listMode: 'hide',
			legendEnabled: false,
			visible: false,
		});
		this.view.map.add(tableLayer);
		this.view.whenLayerView(tableLayer).then(() => {
			this.feature = new Feature({ view: this.view, container: 'featureDiv' });
			const fieldConfigs: FieldColumnConfig[] = [];
			this.condosTable.fields.forEach((field) => {
				fieldConfigs.push(
					new FieldColumnConfig({
						name: field.name,
						label: field.alias,
						editable: false,
						visible: ['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'REID'].includes(field.name),
					}),
				);
			});
			this.featureTable = new FeatureTable({
				view: this.view,
				layer: tableLayer,
				fieldConfigs: fieldConfigs, //[
				// 	new FieldColumnConfig({
				// 		name: 'SITE_ADDRESS',
				// 		label: 'Address',
				// 		editable: false,
				// 		required: true,
				// 	}),
				// 	new FieldColumnConfig({
				// 		name: 'OWNER',
				// 		label: 'Owner',
				// 		editable: false,
				// 		required: true,
				// 	}),
				// 	new FieldColumnConfig({
				// 		name: 'PIN_NUM',
				// 		label: 'PIN',
				// 		editable: false,
				// 		required: true,
				// 	}),
				// 	new FieldColumnConfig({
				// 		name: 'REID',
				// 		label: 'REID',
				// 		editable: false,
				// 		required: true,
				// 	}),
				// ],
				menuConfig: {
					items: [
						({
							label: 'Export',
						} as unknown) as MenuButtonItem,
					],
				},
				container: 'table',
			});
			// this.featureTable.watch('viewModel.state', (state: string) => {
			//   if (state === 'ready') {
			//     const style: HTMLStyleElement = document.createElement('style');
			//     style.append(
			//       document.createTextNode(
			//         'td, th, table { background-color: #353535 !important;color: #fff;} td[role="gridcell"],th[role="columnheader"]{border-color: white !important;}'
			//       )
			//     );
			//     document?.querySelector('.esri-feature-table .esri-grid__grid')?.shadowRoot?.append(style);
			//   }
			// });
			const button: MenuButtonItem = this.featureTable?.menuConfig?.items?.find((item) => {
				return item.label === 'Export';
			}) as MenuButtonItem;
			button.clickFunction = () => {
				this.exportTable();
			};
			button.clickFunction.bind(this.featureTable);

			this.featureTable.on('selection-change', (event) => {
				(this.featureTable as any).clearSelection();
				if (event.added.length) {
					this.getProperty([event.added[0].feature.getAttribute('OBJECTID')], 'table');
					this.setFeature(
						event.added[0].feature,
						this.view as esri.MapView,
						[],
						[event.added[0].feature.getAttribute('OBJECTID')],
					);
					event.added[0].feature.setAttribute('selected', 'true');
					this.toggleContent('details');
				}
			});
		});
		this.searchWidget = new Search({
			allPlaceholder: 'Address, owner, PIN, or REID',
			includeDefaultSources: false,
			container: 'search',
			sources: [
				// new LayerSearchSource({
				//   layer: this.addressTable,
				//   searchFields: ['ADDRESS', 'ADDRESS_NODIR'],
				//   displayField: 'ADDRESS',
				//   exactMatch: false,
				//   outFields: ['ADDRESS', 'REID'],
				//   name: 'Site Address',
				//   placeholder: 'example: 222 W HARGETT'
				// }),
				new LayerSearchSource({
					placeholder: 'example: 222 W HARGETT ST',
					name: 'Site Address',
					getSuggestions: (params: any) => {
						return this.getSuggestions(
							params,
							'Site Address',
							this.addressTable,
							['ADDRESS'],
							['ADDRESS'],
							['ADDRESS'],
							true,
						);
					},
					getResults: (params: any) => {
						return this.addressTable
							.queryFeatures({
								where: `ADDRESS = '${params.suggestResult.text.toUpperCase()}'`,
								outFields: ['ADDRESS', 'REA_REID', 'OBJECTID'],
							})
							.then((results) => {
								return results.features.map((feature) => {
									return {
										feature: feature,
										name: 'Address',
									};
								});
							}) as any;
					},
				} as LayerSearchSource),
				// new LayerSearchSource({
				//   layer: condosTable,
				//   searchFields: ['OWNER'],
				//   displayField: 'OWNER',
				//   exactMatch: false,
				//   outFields: ['OWNER', 'REID', 'OBJECTID'],
				//   name: 'Owner',
				//   placeholder: 'example: SMITH, JOHN'
				// }),
				new LayerSearchSource({
					placeholder: 'example: SMITH, JOHN',
					name: 'Owner',
					getSuggestions: (params: any) => {
						return this.getSuggestions(
							params,
							'Owner',
							this.condosTable,
							['OWNER'],
							['OWNER'],
							['OWNER'],
							false,
						);
					},
					getResults: (params: any) => {
						return this.condosTable
							.queryFeatures({
								where: `OWNER = '${params.suggestResult.text.toUpperCase()}'`,
								outFields: ['OWNER', 'OBJECTID'],
							})
							.then((results) => {
								return results.features.map((feature) => {
									return {
										feature: feature,
										name: 'Owner',
									};
								});
							}) as any;
					},
				} as LayerSearchSource),
				// new LayerSearchSource({
				//   layer: condosTable,
				//   searchFields: ['PIN_NUM'],
				//   displayField: 'PIN_NUM',
				//   exactMatch: false,
				//   outFields: ['PIN_NUM', 'REID', 'OBJECTID'],
				//   name: 'PIN',
				//   placeholder: 'example: 0712345678'
				// }),
				new LayerSearchSource({
					placeholder: 'PIN',
					name: 'PIN',
					getSuggestions: (params: any) => {
						return this.getSuggestions(
							params,
							'PIN',
							this.condosTable,
							['PIN_NUM'],
							['PIN_NUM'],
							['PIN_NUM'],
							true,
						);
					},
					getResults: (params: any) => {
						return this.condosTable
							.queryFeatures({
								where: `PIN_NUM = '${params.suggestResult.text}'`,
								outFields: ['PIN_NUM', 'OBJECTID'],
							})
							.then((results) => {
								return results.features.map((feature) => {
									return {
										feature: feature,
										name: 'PIN',
									};
								});
							}) as any;
					},
				} as LayerSearchSource),
				// new LayerSearchSource({
				//   layer: condosTable,
				//   searchFields: ['REID'],
				//   displayField: 'REID',
				//   exactMatch: false,
				//   outFields: ['REID', 'OBJECTID'],
				//   name: 'REID',
				//   placeholder: 'example: 0123456'
				// }),
				new LayerSearchSource({
					placeholder: 'REID',
					name: 'REID',
					getSuggestions: (params: any) => {
						return this.getSuggestions(
							params,
							'REID',
							this.condosTable,
							['REID'],
							['REID'],
							['REID'],
							true,
						);
					},
					getResults: (params: any) => {
						return this.condosTable
							.queryFeatures({
								where: `REID = '${params.suggestResult.text}'`,
								outFields: ['REID', 'OBJECTID'],
							})
							.then((results) => {
								return results.features.map((feature) => {
									return {
										feature: feature,
										name: 'REID',
									};
								});
							}) as any;
					},
				}) as LayerSearchSource,
				new LayerSearchSource({
					placeholder: 'example: W HARGETT ST',
					name: 'Street Name',
					getSuggestions: (params: any) => {
						return this.getSuggestions(
							params,
							'Street Name',
							this.addressTable,
							['STREET', 'ADDR_LIST'],
							['STREET'],
							['STREET', 'STREET_NODIR'],
							false,
						);
					},
					getResults: (params: any) => {
						return this.addressTable
							.queryFeatures({
								where: `STREET = '${params.suggestResult.text.toUpperCase()}'`,
								outFields: ['STREET', 'REA_REID', 'OBJECTID'],
							})
							.then((results) => {
								return results.features.map((feature) => {
									return {
										feature: feature,
										name: 'Street Name',
									};
								});
							}) as any;
					},
				}) as esri.SearchSource,
			],
		});

		this.searchWidget.on('search-complete', this.searchComplete);
	}

	toggleContent = (value: string): void => {
		if (value === 'list') {
			// document.querySelector('#listTabTitle')?.setAttribute('active', '');
			// document.querySelector('#listTab')?.setAttribute('active', '');
			// document.querySelector('#detailsTabTitle')?.removeAttribute('active');
			// document.querySelector('#detailsTab')?.removeAttribute('active');
			document.querySelector('#detailsTabTitle')?.setAttribute('disabled', '');
			document.querySelector('#listTabTitle')?.dispatchEvent(new MouseEvent('click'));
		} else {
			// document.querySelector('#detailsTabTitle')?.setAttribute('active', '');
			// document.querySelector('#detailsTab')?.setAttribute('active', '');
			// document.querySelector('#listTabTitle')?.removeAttribute('active');
			// document.querySelector('#listTitle')?.removeAttribute('active');
			// document.querySelector('#featureItem')?.setAttribute('checked', '');
			// document.querySelector('#tableItem')?.removeAttribute('checked');
		}
	};
}

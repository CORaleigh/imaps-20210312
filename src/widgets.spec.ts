import { initWidgets } from './widgets';

jest.mock('@arcgis/core//widgets/LayerList');
jest.mock('@arcgis/core//widgets/Legend');

let spy: jest.SpyInstance;

describe('widgets', () => {
	beforeEach(() => {
		spy = jest.spyOn(document, 'getElementById');
		const mockElem: any = {
			offsetWidth: 300,
		};
		spy.mockReturnValue(mockElem);
	});

	it('initializes widgets in view', () => {
		const widgets: any[] = [];
		const view: any = {
			ui: {
				add(w: any) {
					widgets.push(w);
				},
			},
		};
		initWidgets(view);
		expect(widgets).toHaveLength(2);
	});
});

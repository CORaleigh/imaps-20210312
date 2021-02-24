/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import {} from '@arcgis/core/core/watchUtils';
import { Tip } from '../../types/tip';

@subclass('app.widgets.TipManager.TipManagerViewModel')
export default class TipManagerViewModel extends Accessor {
	@property() title!: string;
	@property() tips!: Tip[];

	constructor(params?: any) {
		super(params);
	}
}

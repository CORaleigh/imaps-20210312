import { Tip } from './tip';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
class Action {
	title: string;
	widget: any;
	icon: string;
	container: string;
	tool: boolean;
	tips: Tip[];
	constructor(title: string, widget: any, icon: string, container: string, tool: boolean, tips: Tip[]) {
		this.title = title;
		this.icon = icon;
		this.widget = widget;
		this.container = container;
		this.tool = tool;
		this.tips = tips;
	}
}

export { Action };

import { View } from "dhx-optimus";

import Sidebar from "./Sidebar/Sidebar";
import Explorer from "./Explorer/Explorer";

export default class TopLayout extends View {
	init() {
		return `
			<div class="dhx_demo-sidebar"></div>
			<div class="dhx_demo-explorer"></div>
		`;
	}

	ready() {
		this.show(".dhx_demo-sidebar", Sidebar, { folders: this.params.folders });
		this.show(".dhx_demo-explorer", Explorer);
	}
}

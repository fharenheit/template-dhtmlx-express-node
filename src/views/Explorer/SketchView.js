import { View } from "dhx-optimus";

import { renderImage } from "../../services/files";

export default class SketchView extends View {
	init() {
		this.dataview = new dhx.DataView(null, {
			itemsInRow: 9,
			gap: 8,
			css: "dhx_demo_dataview dhx_demogrid-card",
			keyNavigation: true,
			template: item =>
				`<div class="dhx_demogrid-card__image-wrapper"><div class="dhx_demogrid-card__image-sizer">${renderImage(
					item,
					"dhx_demogrid-card"
				)}</div></div><div class="dhx_demogrid-card__caption">${item.value}</div>`,
			data: this.params.files,
		});

		this.dataview.events.on("click", id => {
			this.fire("itemClick", [id]);
		});

		this.dataview.events.on("itemRightClick", (id, e) => {
			e.preventDefault();
			this.fire("itemRightClick", [id, e]);
		});

		this.dataview.events.on("doubleClick", id => {
			this.fire("itemDblClick", [id]);
		});

		this.dataview.events.on("focusChange", (_, id) => {
			if (this.dataview.selection.getId() !== id) {
				this.dataview.selection.add(id);
				this.fire("itemSelected", [id]);
			}
		});

		return this.dataview;
	}

	ready() {
		this.observe(
			state => state.selectedItemId,
			id => {
				if (id && this.dataview.selection.getId() !== id) {
					this.dataview.selection.add(id);
				}
			}
		);
	}
}

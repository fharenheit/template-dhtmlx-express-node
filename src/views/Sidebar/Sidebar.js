import { View, TopView } from "dhx-optimus";

import AddingForm from "./AddingForm";
import AddingContextMenu from "./AddingContextMenu";
import FileTree from "./FileTree";

import { getProgressBarTemplate } from "../../services/files";

export default class Sidebar extends View {
	init() {
		this.layout = new dhx.Layout(null, {
			rows: [
				{
					css: "dhx_demo-logo",
					html: "<div class='dhx_demo-logo__img'></div>",
					height: "content",
				},
				{
					id: "topSection",
					css: "dhx_demo-addingForm",
					height: "content",
				},
				{
					id: "fileTree",
					css: "dhx_demo-tree",
				},
				{
					type: "spacer",
				},
				{
					css: "dhx_demo-progressBar",
					html: getProgressBarTemplate(159 * 1024 * 1024 * 1024, 1024 * 1024 * 1024 * 1024),
					height: "content",
				},
			],
		});

		this.menu = this.show(TopView, AddingContextMenu, {});

		this.show(this.layout.getCell("topSection"), AddingForm, {});
		this.show(this.layout.getCell("fileTree"), FileTree, {
			folders: this.params.folders,
		});

		this.on("addButtonClick", e => {
			this.menu.showMenu(e);
		});

		return this.layout;
	}
}

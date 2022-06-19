import { View, TopView } from "dhx-optimus";

import Toolbar from "./Toolbar";
import TableView from "./TableView";
import Info from "./Info";
import RenameFormWindow from "./RenameFormWindow";
import SketchView from "./SketchView";
import ItemContextMenu from "./ItemContextMenu";

import { getFoldersAndFiles, rename, remove } from "../../services/api";

export default class Explorer extends View {
	init() {
		return `
			<div class="dhx_demo-toolbar"></div>
			<div class="dhx_demo-main"></div>
			<div class="dhx_demo-info"></div>
		`;
	}

	ready() {
		const files = new dhx.DataCollection();

		this.show(".dhx_demo-toolbar", Toolbar, {});
		this.show(".dhx_demo-info", Info, { files });

		this.currentPath = "";
		this.viewMode = "table";
		this.sort = "asc";
		this.filter = "";

		this.itemMenu = this.show(TopView, ItemContextMenu);

		this.renameForm = this.show(TopView, RenameFormWindow);

		this.showMainView(this.viewMode, files);

		this.observe(
			state => state.currentPath,
			path => {
				this.currentPath = path;
				getFoldersAndFiles(path).then(items => {
					files.parse(items);
					files.sort({ by: "value", dir: this.sort });
					files.filter(i => i.value.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0);
				});
			}
		);

		this.on("modeClick", mode => {
			this.viewMode = mode;
			this.showMainView(mode, files);
		});

		this.on("sortClick", sort => {
			this.sort = sort;
			files.sort({ by: "value", dir: sort });
		});

		this.on("filterInput", filter => {
			this.filter = filter;
			files.filter(i => i.value.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
		});

		this.on("itemRightClick", (id, e) => {
			this.itemMenu.showMenu(e, id);
		});

		this.on("deleteClick", id => {
			const item = files.getItem(id);
			remove(`${this.currentPath}/${item.value}`, item.isFolder)
				.then(() => {
					files.remove(id);
					this.fire("itemRemoved", [id]);
				})
				.catch(() => {
					dhx.message("Deletion Error");
				});
		});

		this.on("renameClick", id => {
			this.renameForm.showForm(files.getItem(id));
		});

		this.on("renameFormApply", (id, formValue) => {
			const item = files.getItem(id);
			rename(this.currentPath, item.value, formValue)
				.then(() => {
					files.update(item.id, { value: formValue });
					this.fire("itemRenamed", [item.id, formValue]);
				})
				.catch(() => {
					dhx.message("Rename Error");
				});
		});

		this.on("itemAdded", item => {
			files.add(item);
		});
	}

	showMainView(view, files) {
		switch (view) {
			case "sketch":
				this.view = this.show(".dhx_demo-main", SketchView, { files });
				break;
			case "table":
				this.view = this.show(".dhx_demo-main", TableView, { files });
				break;
		}
	}
}

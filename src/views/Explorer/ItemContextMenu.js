import { View } from "dhx-optimus";

export default class ItemContextMenu extends View {
	init() {
		this.contextMenu = new dhx.ContextMenu(null, {});

		this.contextMenu.data.parse([
			{
				type: "menuItem",
				id: "add-file",
				value: "Add file",
				icon: "mdi mdi-file",
			},
			{
				type: "menuItem",
				id: "add-folder",
				value: "Add folder",
				icon: "mdi mdi-folder",
			},
			{
				type: "menuItem",
				id: "rename",
				value: "Rename",
				icon: "mdi mdi-pencil",
			},
			{
				type: "menuItem",
				id: "delete",
				value: "Delete",
				icon: "mdi mdi-delete",
				hotkey: "Del",
			},
		]);

		this.contextMenu.events.on("click", id => {
			switch (id) {
				case "rename":
					this.fire("renameClick", [this.context]);
					break;
				case "add-file":
					this.fire("addFileClick", [this.context]);
					break;
				case "add-folder":
					this.fire("addFolderClick", [this.context]);
					break;
				case "delete":
					this.fire("deleteClick", [this.context]);
					break;
			}
		});

		return this.contextMenu;
	}

	showMenu(e, itemId) {
		this.context = itemId;
		this.contextMenu.showAt(e.target);
	}
}

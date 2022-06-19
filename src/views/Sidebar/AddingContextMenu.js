import { View } from "dhx-optimus";

export default class AddingContextMenu extends View {
	init() {
		this.contextMenu = new dhx.ContextMenu(null, {
			menuCss: "dhx_demo-add-menu",
			navigationType: "click",
		});

		this.contextMenu.data.parse([
			{
				type: "menuItem",
				id: "add_folder",
				icon: "mdi mdi-folder-plus",
				value: "New folder",
			},
			{
				type: "menuItem",
				id: "add_file",
				icon: "mdi mdi-file-plus",
				value: "New file",
			},
			{
				type: "menuItem",
				id: "upload_files",
				icon: "mdi mdi-upload",
				value: "Upload files",
			},
		]);

		this.contextMenu.events.on("click", id => {
			switch (id) {
				case "add_file":
					this.fire("addFileClick", []);
					break;
				case "add_folder":
					this.fire("addFolderClick", []);
					break;
				case "upload_files":
					this.fire("uploadButtonClick", []);
					break;
			}
		});

		return this.contextMenu;
	}

	showMenu(e) {
		this.contextMenu.showAt(e.target);
	}
}

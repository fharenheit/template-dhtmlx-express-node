import "./styles/main.scss";

import { App, TopView } from "dhx-optimus";
import Store from "dhx-optimus-store";

import TopLayout from "./views/TopLayout";
import AddFormWindow from "./views/AddFormWindow";
import { authorization, getFolders, getAuthorizationKey, add as addFile } from "./services/api";
import { getPath, keyGen } from "./services/files";
import Uploader from "./components/Uploader";

const initialState = {
	selectedItemId: "",
	currentFolderId: "",
	currentPath: "",
};

export class FileExplorer extends App {
	init() {
		if (!localStorage.getItem("dhxKey")) {
			localStorage.setItem("dhxKey", keyGen());
		}

		this.store = this.params.store = new Store(initialState);
		this.state = this.store.getState();
		this.folders = new dhx.TreeCollection();

		authorization(localStorage.getItem("dhxKey"));

		getFolders("").then(fs => {
			this.folders.parse(fs);
			const curId = fs[0]?.id;
			if (curId) {
				this.state.currentFolderId = curId;
				this.state.currentPath = getPath(curId, this.folders);
			}
		});

		this.addForm = this.show(TopView, AddFormWindow);
		dhx.scrollViewConfig.enable = true;
		this.show(null, TopLayout, { folders: this.folders });
		this.use(Uploader);

		this.subscribe();
	}

	setCurrentFolder(id) {
		const path = getPath(id, this.folders);
		if (path) {
			this.state.currentPath = path;
			this.state.currentFolderId = id;
		}
	}

	subscribe() {
		this.on("sideItemClick", id => {
			this.setCurrentFolder(id);
		});

		this.on("itemDblClick", id => {
			this.state.selectedItemId = id;
			this.setCurrentFolder(id);
		});

		this.on("itemClick", id => {
			this.state.selectedItemId = id;
		});

		this.on("addFileClick", () => {
			this.addForm.showForm(false);
		});

		this.on("addFolderClick", () => {
			this.addForm.showForm(true);
		});

		this.on("addFormApply", (name, isFolder) => {
			addFile(this.state.currentPath, name, isFolder)
				.then(item => {
					if (isFolder) {
						item.isFolder = true;
						this.folders.add(item, -1, this.state.currentFolderId);
					}
					this.fire("itemAdded", [{ ...item }]);
				})
				.catch(() => {
					dhx.message("Add Error");
				});
		});

		this.on("itemRenamed", (id, newName) => {
			const item = this.folders.getItem(id);
			if (item) {
				this.folders.update(id, { value: newName });
			}
		});

		this.on("itemRemoved", id => {
			if (this.folders.getItem(id)) {
				this.folders.remove(id);
			}
		});

		this.on("uploadButtonClick", () => {
			this.fire("uploadRequested", [
				`root_${getAuthorizationKey()}/${this.state.currentPath}`,
				this.state.currentFolderId,
			]);
		});

		this.on("uploadFinished", folderId => {
			this.setCurrentFolder(folderId);
			dhx.message("Upload finished");
		});
	}
}

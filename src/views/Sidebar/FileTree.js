import { View } from "dhx-optimus";

export default class FileTree extends View {
	init() {
		this.tree = new dhx.Tree(null, { isFolder: i => i.isFolder, data: this.params.folders });

		this.tree.events.on("itemRightClick", (id, e) => {
			e.preventDefault();
			this.fire("itemRightClick", [id, e.target]);
		});

		this.tree.events.on("itemClick", id => {
			this.fire("sideItemClick", [id]);
		});

		return this.tree;
	}

	ready() {
		this.observe(
			state => state.currentFolderId,
			id => {
				const currentId = this.tree.selection.getId();
				if (currentId !== id) {
					this.tree.selection.remove();
					if (id) {
						this.tree.selection.add(id);
					}
					this.tree.expand(id);

					this.tree.data.eachParent(id, p => {
						this.tree.expand(p.id);
					});
				}
			}
		);
	}
}

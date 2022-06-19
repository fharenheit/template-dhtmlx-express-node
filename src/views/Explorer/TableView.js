import { View } from "dhx-optimus";

import { getBasis, getFileClassName } from "../../services/files";

const fileTypes = {
	"text/html": "HTML Document",
	"image/jpeg": "JPEG Image",
	"application/pdf": "PDF Document",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX Document",
	folder: "Folder",
};

export default class TableView extends View {
	init() {
		this.grid = new dhx.Grid(null, {
			columns: [
				{
					id: "value",
					header: [{ text: "Name", css: "dhx_demo-padding" }],
					type: "string",
					htmlEnable: true,
					template: (_, cell) => {
						return `<div class="dhx_demogrid-card__bg-icon dhx_demogrid-card__bg-icon--grid dhx_demo-file-icon--${getFileClassName(
							cell
						)}"></div>
						<div class="dhx_demo-grid__filename">${cell.value}</div>`;
					},
					gravity: 2,
				},
				{
					id: "type",
					header: [{ text: "Type" }],
					template: val => {
						return fileTypes[val] ? fileTypes[val] : val;
					},
				},
				{
					id: "size",
					header: [{ text: "Size" }],
					type: "number",
					template: (val, item) => (item.isFolder ? "-" : isNaN(val) ? val : getBasis(val)),
				},
				{
					id: "modified",
					header: [{ text: "Modified" }],
					type: "number",
					template: (val, item) => (item.isFolder ? "-" : val),
				},
				{
					id: "created",
					header: [{ text: "Created", css: "dhx_demo-padding" }],
					type: "number",
					mark: () => "dhx_demo-padding",
					template: (val, item) => (item.isFolder ? "-" : val),
				},
			],
			headerRowHeight: 50,
			autoWidth: true,
			selection: "row",
			sortable: false,
			css: "dhx_demo-grid",
			data: this.params.files,
			tooltip: false,
		});
		this.initEvents();

		return this.grid;
	}

	ready() {
		this.observe(
			state => state.selectedItemId,
			id => {
				const selection = this.grid.selection.getCell();
				if (id && (!selection || selection?.row?.id !== id)) {
					return this.grid.selection.setCell(id);
				}
			}
		);
	}

	initEvents() {
		this.grid.selection.events.on("afterSelect", row => {
			this.fire("itemClick", [row.id]);
		});

		this.grid.events.on("cellRightClick", (row, _, e) => {
			e.preventDefault();
			this.fire("itemRightClick", [row.id, e]);
		});

		this.grid.events.on("cellDblClick", row => {
			this.fire("itemDblClick", [row.id]);
		});

		this.grid.events.on("afterKeyDown", e => {
			if (this.app.params.currentMainView === "grid") {
				const selected = this.grid.selection.getCell();
				if (selected) {
					switch (e.key) {
						case "ArrowDown":
						case "Down":
						case "ArrowUp":
						case "Up":
							this.fire("itemSelected", [selected.row.id]);
							break;
						case "Enter":
							this.fire("itemDblClick", [selected.row.id]);
							break;
					}
				}
			}
		});
		this.grid.data.events.on("load", () => {
			this.grid.selection.setCell(this.grid.data.getId(this.grid.data.getLength() - 1));
		});
	}
}

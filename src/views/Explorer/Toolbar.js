import { View } from "dhx-optimus";

export default class Toolbar extends View {
	init() {
		this.toolbar = new dhx.Toolbar(null, {});

		this.toolbar.data.parse([
			{
				id: "sketch",
				type: "navItem",
				twoState: true,
				group: "view",
				circle: true,
				icon: "mdi mdi-view-grid",
			},
			{
				id: "table",
				type: "navItem",
				twoState: true,
				group: "view",
				circle: true,
				active: true,
				icon: "mdi mdi-view-sequential",
			},
			{
				type: "separator",
			},
			{
				id: "sort",
				type: "navItem",
				circle: true,
				icon: "mdi mdi-sort-ascending",
				sortDir: true,
			},
			{
				id: "search",
				css: "dhx_demo-toolbar__search",
				type: "input",
				width: "100%",
				placeholder: "Search",
				icon: "dxi dxi-magnify",
			},
		]);

		this.initEvents();

		return this.toolbar;
	}

	initEvents() {
		this.toolbar.events.on("click", id => {
			switch (id) {
				case "table":
					this.fire("modeClick", ["table"]);
					break;
				case "sketch":
					this.fire("modeClick", ["sketch"]);
					break;
				case "sort":
					const item = this.toolbar.data.getItem(id);
					const sortDir = (item.sortDir = !item.sortDir);

					this.toolbar.data.update(item.id, {
						icon: sortDir ? "mdi mdi-sort-ascending" : "mdi mdi-sort-descending",
					});

					this.fire("sortClick", [sortDir ? "asc" : "desc"]);
					break;
			}
		});

		this.toolbar.events.on("inputCreated", (_, input) => {
			input.oninput = e => {
				this.fire("filterInput", [e.target.value]);
			};
		});
	}
}

import { View } from "dhx-optimus";

import { folderInfo, getDownloadFolderLink } from "../../services/api";
import { getBasis, renderImage } from "../../services/files";

export default class Info extends View {
	init() {
		this.tabbar = new dhx.Tabbar(null, {
			mode: "top",
			css: "dhx_demo-tabbar",
			tabAutoWidth: true,
			views: [
				{
					tab: "information",
					css: "dhx_demo-tabbar__inner",
					rows: [{ id: "information-image", height: "content" }, { id: "information" }],
				},
				{
					tab: "download",
					css: "dhx_demo-tabbar__inner",
					rows: [{ id: "download-view", height: "content" }, { id: "download-button" }],
				},
			],
		});

		return this.tabbar;
	}

	ready() {
		this.observe(
			state => state.selectedItemId,
			(id, state) => {
				if (id) {
					const item = this.params.files.getItem(id);
					this.updateInfo(item, state.currentPath);
				}
			}
		);
	}

	updateInfo(item, path) {
		if (item.isFolder) {
			folderInfo(path).then(info => {
				this.form = new dhx.Form(null, {
					css: "dhx_demo-tabbar__form",
					rows: [
						{
							type: "text",
							name: "name",
							value: item.value,
							label: "Name",
							labelPosition: "left",
							labelWidth: "120px",
						},
						{
							type: "text",
							name: "size",
							value: getBasis(info.size),
							label: "Size",
							labelPosition: "left",
							labelWidth: "120px",
						},
						{
							type: "text",
							name: "filescount",
							value: info.count,
							label: "Files count",
							labelPosition: "left",
							labelWidth: "120px",
						},
					],
				});

				const button = `
				<a href="${getDownloadFolderLink(path)}"
					class="dhx_button dhx_button--icon dhx_button--view_flat dhx_button--width_full dhx_button--size_medium dhx_button--circle dhx_button--color_primary">
					<span class="dhx_button__icon mdi mdi-download"></span>
					<span class="dhx_button__text"> DOWNLOAD ZIP</span>
				</a>`;

				this.tabbar
					.getCell("information-image")
					.attachHTML(renderImage({ ...item, type: "folder" }, "dhx_demo-tabbar"));
				this.tabbar.getCell("information").attach(this.form);
				this.tabbar
					.getCell("download-view")
					.attachHTML(renderImage({ ...item, type: "folder" }, "dhx_demo-tabbar"));
				this.tabbar.getCell("download-button").attachHTML(button);
			});
		} else {
			this.form = new dhx.Form(null, {
				css: "dhx_demo-tabbar__form",
				rows: [
					{
						type: "text",
						name: "name",
						value: item.value,
						label: "Name",
						labelPosition: "left",
						labelWidth: "80px",
					},
					{
						type: "text",
						name: "size",
						value: item.size,
						label: "Size",
						labelPosition: "left",
						labelWidth: "80px",
					},
					{
						type: "text",
						name: "modified",
						value: item.modified,
						label: "Modified",
						labelPosition: "left",
						labelWidth: "80px",
					},
					{
						type: "text",
						name: "created",
						value: item.modified,
						label: "Created",
						labelPosition: "left",
						labelWidth: "80px",
					},
				],
			});

			const button = `
			<a href="${item.url}" class="dhx_button dhx_button--icon dhx_button--view_flat dhx_button--width_full dhx_button--size_medium dhx_button--circle dhx_button--color_primary">
				<span class="dhx_button__icon mdi mdi-download"></span>
				<span class="dhx_button__text"> DOWNLOAD </span>
			</a>`;

			this.tabbar.getCell("information-image").attachHTML(renderImage(item, "dhx_demo-tabbar"));
			this.tabbar.getCell("information").attach(this.form);
			this.tabbar.getCell("download-view").attachHTML(renderImage(item, "dhx_demo-tabbar"));
			this.tabbar.getCell("download-button").attachHTML(button);
		}
	}
}

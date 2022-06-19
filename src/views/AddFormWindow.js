import { View } from "dhx-optimus";

export default class FormWindow extends View {
	init() {
		this.window = new dhx.Window({
			closable: true,
			height: 180,
			width: 400,
			header: false,
			modal: true,
		});

		return this.window;
	}

	showForm(isFolder) {
		this.form = new dhx.Form(null, {
			rows: [
				{
					type: "input",
					name: "name",
					placeholder: `${isFolder ? "Folder" : "File"} name`,
					label: `${isFolder ? "Add new folder" : "Add new file"} to current folder`,
				},
				{
					type: "spacer",
				},
				{
					css: "dhx_demo-window__buttons",
					align: "around",
					cols: [
						{
							type: "button",
							name: "cancel",
							text: "cancel",
							view: "link",
							color: "primary",
							size: "medium",
						},
						{
							type: "button",
							name: "apply",
							text: "apply",
							view: "flat",
							color: "primary",
							size: "medium",
						},
					],
				},
			],
		});

		this.form.events.on("click", name => {
			if (name === "apply") {
				this.fire("addFormApply", [this.form.getValue().name, isFolder]);
			}

			this.window.hide();
		});

		this.window.attach(this.form);
		this.window.show();
	}
}

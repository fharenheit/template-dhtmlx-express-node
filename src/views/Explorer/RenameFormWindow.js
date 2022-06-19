import { View } from "dhx-optimus";

export default class RenameFormWindow extends View {
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

	showForm(item) {
		const form = new dhx.Form(null, {
			rows: [
				{
					type: "input",
					name: "name",
					value: item.value,
					placeholder: item.value,
					label: item.isFolder ? `Rename "${item.value}" folder` : `Rename "${item.value}" file`,
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

		form.events.on("click", name => {
			if (name === "apply") {
				this.fire("renameFormApply", [item.id, form.getValue().name]);
			}

			this.window.hide();
		});

		this.window.attach(form);
		this.window.show();
	}
}

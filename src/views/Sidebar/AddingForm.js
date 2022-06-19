import { View } from "dhx-optimus";

export default class AddingForm extends View {
	init() {
		this.addingForm = new dhx.Form(null, {
			rows: [
				{
					type: "button",
					name: "add-file-button",
					full: true,
					icon: "dxi dxi-plus",
					text: "add",
				},
			],
		});

		this.addingForm.events.on("click", (_, e) => {
			this.fire("addButtonClick", [e]);
		});

		return this.addingForm;
	}
}

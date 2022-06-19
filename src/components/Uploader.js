import { Component } from "dhx-optimus";

export default class Uploader extends Component {
	init() {
		this.uploader = new dhx.Uploader({
			target: "./backend/upload",
		});

		this.on("uploadRequested", (path, folderId) => {
			this.uploader.data.removeAll();
			this.uploader.config.params = {
				path,
			};
			this.uploader.selectFile();
			this.folderId = folderId;
		});

		this.uploader.events.on("uploadComplete", () => {
			this.fire("uploadFinished", [this.folderId]);
		});
		return this.uploader;
	}
}

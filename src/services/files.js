export function getPath(id, tree) {
	const pathItems = tree.getItem(id) && [tree.getItem(id)];
	if (!pathItems) return;
	let parentId = tree.getParent(id);
	while (parentId && tree.getRoot() !== parentId) {
		pathItems.unshift(tree.getItem(parentId));
		parentId = tree.getParent(parentId);
	}
	return pathItems.map(i => i.value).join("/");
}

export function getBasis(size = 0, current = 0) {
	if (current === 0 && size === 0) {
		return "0";
	}
	const basis = ["B", "KB", "MB", "GB", "TB"];
	return size < 1024 ? size + " " + basis[current] : getBasis(Math.round(size / 1024), current + 1);
}

export function getFileType(extension, mime = "other") {
	switch (extension) {
		case "jpg":
		case "jpeg":
		case "gif":
		case "png":
		case "bmp":
		case "tiff":
		case "pcx":
		case "svg":
		case "ico":
			return "image";
		case "avi":
		case "mpg":
		case "mpeg":
		case "rm":
		case "move":
		case "mov":
		case "mkv":
		case "flv":
		case "f4v":
		case "mp4":
		case "3gp":
		case "wmv":
		case "webm":
		case "vob":
			return "video";
		case "rar":
		case "zip":
		case "tar":
		case "tgz":
		case "arj":
		case "gzip":
		case "bzip2":
		case "7z":
		case "ace":
		case "apk":
		case "deb":
		case "zipx":
		case "cab":
		case "tar-gz":
		case "rpm":
		case "xar":
			return "archive";
		case "xlr":
		case "xls":
		case "xlsm":
		case "xlsx":
		case "ods":
		case "csv":
		case "tsv":
			return "table";
		case "doc":
		case "docx":
		case "docm":
		case "dot":
		case "dotx":
		case "odt":
		case "wpd":
		case "wps":
		case "pages":
			return "document";
		case "wav":
		case "aiff":
		case "au":
		case "mp3":
		case "aac":
		case "wma":
		case "ogg":
		case "flac":
		case "ape":
		case "wv":
		case "m4a":
		case "mid":
		case "midi":
			return "audio";
		case "pot":
		case "potm":
		case "potx":
		case "pps":
		case "ppsm":
		case "ppsx":
		case "ppt":
		case "pptx":
		case "pptm":
		case "odp":
			return "presentation";
		case "html":
		case "htm":
		case "eml":
			return "web";
		case "exe":
			return "application";
		case "dmg":
			return "apple";
		case "pdf":
		case "ps":
		case "eps":
			return "pdf";
		case "psd":
			return "psd";
		case "txt":
		case "djvu":
		case "nfo":
		case "xml":
			return "text";
		default:
			const type = mime.split("/")[0];
			switch (type) {
				case "folder":
					return "folder";
				case "image":
					return "image";
				case "audio":
					return "audio";
				case "video":
					return "video";
				default:
					return "other";
			}
	}
}

export function getFileClassName(item) {
	const extension = item.value.split(".").pop();
	const mime = item.type;
	return item.isFolder ? "folder" : getFileType(extension, mime);
}

export function renderImage(item, classPrefix) {
	if (item && item.type && item.type.indexOf("image") !== -1) {
		return `<img class="${classPrefix}__image" src="${item.url}"/>`;
	}
	return `<div class="${classPrefix}__bg-icon dhx_demo-file-icon dhx_demo-file-icon--${getFileClassName(
		item
	)}"></div>`;
}

export function getProgressBarTemplate(empty, total) {
	return `
		<div class="dhx_demo-progressBar__total" style="width: 100%;">
			<div class="dhx_demo-progressBar__occupied" style="width: ${((total - empty) / total) * 100}%"></div>
		</div>
		<span>Empty ${getBasis(empty)} from ${getBasis(total)}</span>`;
}

export function keyGen() {
	let key = new Date().getDate() + 1 + new Date().getTime() / 5;
	return "ui" + Math.round(key);
}

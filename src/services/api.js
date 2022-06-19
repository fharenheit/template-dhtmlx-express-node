let authKey;

export async function authorization(key) {
	if (!authKey) {
		authKey = key;
	}
	await dhx.ajax.get(`./backend/authorization?path=root_${key}/`);
}

export function getAuthorizationKey() {
	return authKey;
}

export async function getFolders(path = "") {
	return await dhx.ajax.get(`./backend/folders?key=${authKey}/${path}`);
}

export async function getFiles(path = "") {
	return await dhx.ajax.get(`./backend/files?path=root_${authKey}/${path}`);
}

export async function getFoldersAndFiles(path = "") {
	const [folders, files] = await Promise.all([getFolders(path), getFiles(path)]);
	return [...(folders || []), ...(files || [])];
}

export async function rename(path, oldName, newName) {
	return await dhx.ajax.post("./backend", {
		path: `root_${authKey}/${path}`,
		old: oldName,
		value: newName,
	});
}

export async function add(path, value, isFolder) {
	return dhx.ajax.put("./backend", {
		path: `root_${authKey}/${path}`,
		value,
		isFolder,
	});
}

export async function remove(path, isFolder) {
	await dhx.ajax.delete("./backend", { path: `root_${authKey}/${path}`, isFolder });
	return true;
}

export async function folderInfo(path) {
	return await dhx.ajax.get(`./backend/info?path=root_${authKey}/${path}`);
}

export function getDownloadFolderLink(path) {
	return `./backend/download?path=root_${authKey}/${path}`;
}

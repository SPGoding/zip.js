import * as zip from "../../index.js";

export { test };

async function test() {
	let customFetchCalled = false;
	const customFetch = (...args) => {
		customFetchCalled = true;
		return fetch(...args);
	};

	zip.configure({ chunkSize: 128, useWebWorkers: true });
	const zipReader = new zip.ZipReader(new zip.HttpReader("../data/lorem.zip", { preventHeadRequest: true, customFetch }));
	await zipReader.getEntries();
	await zipReader.close();
	await zip.terminateWorkers();

	if (!customFetchCalled) {
		throw new Error();
	}
}

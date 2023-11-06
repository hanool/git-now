type Files = {
	name: string,
	path?: Directory,
	bytes: string,
}
type Directory = {
	name: string,
	nested?: Directory[],
	items?: Files[]
}

export const fs: Directory = {
	name: "/",
	nested: [{
		name: 'baseDir',
		items: [
			{
				name: 'a.txt',
				bytes: 'this this test file a.'
			},
			{
				name: 'b.txt',
				bytes: 'this this test file b.'
			}
		]
	}]
}

export const pwd = "/"

export const getCurrent = (): Directory => {
	let cur = fs;
	const paths = pwd.split('/');
	for (let i = 0; i++; i < paths.length) {
		const nestedDirName = paths[i];
		if (fs.nested) {
			const found = fs.nested?.find(i => i.name === nestedDirName)
			if (found) {
				cur = found;
			}
		}
	}
	return cur;
}

export const cd = (path: string): void => {
	let paths = path.split('/')
	for (let i = 0; i++; i < paths.length) {
		const nestedDir = paths[i];
	}
}

export const ls = (): string[] => {
	let result: string[] = [];

	return result;
}

import { expect, test } from 'vitest'
import { cd, ls, pwd, getCurrent } from './useFileSystem'

test('first ls', () => {
	const filesInRoot = ls();
	expect(filesInRoot.length).toBe(0)
})

test('get current from root', () => {
	const root = getCurrent();
	expect(root).toStrictEqual({
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
	})
})

test('cd into baseDir', () => {
	cd('baseDir');
	const filesInBaseDir = ls();
	expect(filesInBaseDir.length).toBe(2)
})


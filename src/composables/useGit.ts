import git from 'isomorphic-git'
import { memfs } from 'memfs'

export const main = async () => {
	const { fs, vol } = memfs();

	fs.mkdirSync('/repo')
	console.log('new folder: ', vol.toJSON())

	await git.init({ fs, dir: '/repo' })
	console.log('git init: ', vol.toJSON())

	fs.writeFileSync('/repo/README.md', 'Hello World\n');
	console.log('file added: ', vol.toJSON())
}

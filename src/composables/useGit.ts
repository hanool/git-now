import git from 'isomorphic-git'
import { memfs } from 'memfs'

const { fs } = memfs();

export const initStage = async () => {
	fs.mkdirSync('/repo')
	await git.init({ fs, dir: '/repo' })
	fs.writeFileSync('/repo/README.md', 'hello, world!\n')
}

export const status = async (): Promise<string[]> => {
	const status = await git.statusMatrix({ fs, dir: '/repo' })
	return status.map(matrix => {
		const fileName = matrix[0]
		const head = matrix[1]
		const status = matrix[2]
		const staged = matrix[3]

		return `${fileName}: `
			+ `${head === 0 ? 'new' : 'present'}, `
			+ `${status === 0 ? 'deleted' : status === 2 ? 'modified' : ''}, `
			+ `${staged === 0 ? 'staged' : 'unstaged'}`
	})

}

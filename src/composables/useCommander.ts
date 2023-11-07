/// <reference types="./commander.d.ts" />
import { status } from '@/composables/useGit'

export default () => {
	return {
		processCommand,
	}
}

const processCommand = async (command: string): Promise<Action> => {
	if (command === 'clear') {
		return {
			name: "clear",
			process: () => {
				return [];
			}
		}
	} else if (command === 'git status') {
		const gitStatus = await status()
		return {
			name: 'git status',
			process: (outputs) => {
				gitStatus.forEach(fileStatus => {
					outputs.push({
						idx: outputs.length,
						data: fileStatus
					})
				})
				return outputs
			}
		}

	} else {
		return {
			name: "push",
			process: (outputs) => {
				outputs.push({
					idx: outputs.length,
					data: command,
				});
				return outputs;
			}
		}
	}
}

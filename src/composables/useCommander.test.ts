import { expect, test } from 'vitest'
import useCommander from './useCommander'

const { processCommand } = useCommander()

test('push normal commands', () => {
	const inputs = [{
		idx: 0,
		data: 'some'
	}]
	const processed = processCommand('next')?.process(inputs)
	expect(processed?.length).toBe(2)
	expect(processed ? processed[1].data : '').toBe('next')

})

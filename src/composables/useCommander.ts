export default () => {
    return {
        processCommand,
    }
}

const processCommand = (command: string): Action => {
    if (command === 'clear') {
        return {
            name: "clear",
            process: () => {
                return [];
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

type Action = {
    name: string,
    process: (outputs: { idx: number, data: string }[]) => { idx: number, data: string }[],
} | null;
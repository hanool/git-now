
type Action = {
    name: string,
    process: (outputs: { idx: number, data: string }[]) => { idx: number, data: string }[],
} | null;
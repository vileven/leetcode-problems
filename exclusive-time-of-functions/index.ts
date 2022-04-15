function exclusiveTime(n: number, logs: string[]): number[] {
	let stack: [id: string, ts: number][] = [];
	const result: number[] = [];

	logs.forEach((log) => {
		const [id, operation, timestampString] = log.split(':');
		const ts = Number(timestampString);

		if (operation === 'start') {
			stack.push([id, ts]);

			if (result[id] === undefined) {
				result[id] = 0;
			}

			return;
		}

		const [, startTs] = stack.pop();
		const callDuration = ts - startTs + 1;
		result[id] += callDuration;

		if (stack.length) {
			const [nextProcessId] = stack[stack.length - 1];
			result[nextProcessId] -= callDuration;
		}
	});

	return result;
}

export default exclusiveTime;

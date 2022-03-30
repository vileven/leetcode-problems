function merge(intervals: number[][]): number[][] {
	let lastStart = null;
	let lastEnd = null;

	const result = intervals
		.sort((a, b) => {
			return a[0] < b[0] ? -1 : 1;
		})
		.reduce<number[][]>((acc, [start, end], index, array) => {
			if (lastStart === null) {
				lastStart = start;
			}

			if (lastEnd === null) {
				lastEnd = end;
			}

			if (start <= lastEnd) {
				lastEnd = lastEnd > end ? lastEnd : end;
				return acc;
			}

			acc.push([lastStart, lastEnd]);
			lastStart = start;
			lastEnd = end;

			return acc;
		}, []);

	result.push([lastStart, lastEnd]);

	return result;
}

export default merge;

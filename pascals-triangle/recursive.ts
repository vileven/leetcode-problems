function pascalTriangle(i: number, j: number, cache: number[][]) {
	if (cache[i][j]) {
		return cache[i][j];
	}

	if (i <= 1 || i === j || j === 0) {
		return 1;
	}

	cache[i][j] =
		pascalTriangle(i - 1, j - 1, cache) + pascalTriangle(i - 1, j, cache);

	return cache[i][j];
}

export function generate(numRows: number): number[][] {
	const result = [];
	for (let i = 0; i < numRows; i++) {
		result[i] = [];
		for (let j = 0; j <= i; j++) {
			result[i][j] = pascalTriangle(i, j, result);
		}
	}

	return result;
}

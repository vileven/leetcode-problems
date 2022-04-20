function generate(numRows: number): number[][] {
	const result = [];
	for (let i = 0; i < numRows; i++) {
		result[i] = [];
		for (let j = 0; j <= i; j++) {
			if (i === j || i <= 1 || j === 0) {
				result[i][j] = 1;
				continue;
			}

			result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
		}
	}

	return result;
}

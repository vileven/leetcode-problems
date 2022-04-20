function pascalTriangle(row: number, col: number, memo: number[][]) {
	if (memo[row]?.[col]) {
		return memo[row][col];
	}

	if (row <= 1 || row === col || col === 0) {
		return 1;
	}

	if (!memo[row]) {
		memo[row] = [];
	}

	memo[row][col] =
		pascalTriangle(row - 1, col - 1, memo) +
		pascalTriangle(row - 1, col, memo);

	return memo[row][col];
}

export function getRow(rowIndex: number): number[] {
	const cache = [];
	const result = [];
	for (let i = 0; i <= rowIndex; i++) {
		result[i] = pascalTriangle(rowIndex, i, cache);
	}

	return result;
}

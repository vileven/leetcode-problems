function isToeplitzMatrix(matrix: number[][]): boolean {
	const rows = matrix.length;
	const cols = matrix[0].length;

	const map: Map<number, number> = new Map();

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (!map.has(row - col)) {
				map.set(row - col, matrix[row][col]);
				continue;
			}

			if (map.get(row - col) !== matrix[row][col]) {
				return false;
			}
		}
	}

	return true;
}

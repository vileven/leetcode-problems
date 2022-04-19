const isInBoundsGen = (n: number, m: number) => (row: number, col: number) =>
	row >= 0 && row < n && col >= 0 && col < m;

// time  O(NM)
// space O(1)
function findDiagonalOrder(mat: number[][]): number[] {
	const rows = mat.length;
	const cols = mat[0].length;

	const isInBounds = isInBoundsGen(rows, cols);
	const result = [];

	let up = true;
	let row = 0;
	let col = 0;
	while (row < rows && col < cols) {
		result.push(mat[row][col]);

		if (up) {
			if (isInBounds(row - 1, col + 1)) {
				row--;
				col++;
			} else {
				up = false;
				if (isInBounds(row, col + 1)) {
					col++;
				} else {
					row++;
				}
			}
		} else {
			if (isInBounds(row + 1, col - 1)) {
				row++;
				col--;
			} else {
				up = true;
				if (isInBounds(row + 1, col)) {
					row++;
				} else {
					col++;
				}
			}
		}
	}

	return result;
}

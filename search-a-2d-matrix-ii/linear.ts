/**
 * time O(n + m)
 * space O(1)
 */
function searchMatrix(matrix: number[][], target: number): boolean {
	const rows = matrix.length;
	const cols = matrix[0].length;

	let row = rows - 1;
	let col = 0;

	while (col < cols && row >= 0) {
		if (matrix[row][col] === target) {
			return true;
		}

		if (matrix[row][col] > target) {
			row--;
		} else {
			col++;
		}
	}

	return false;
}

export default searchMatrix;

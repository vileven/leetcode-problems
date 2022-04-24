function searchMatrix(matrix: number[][], target: number): boolean {
	const rows = matrix.length;
	const cols = matrix[0].length;

	const searchRec = (
		left: number,
		up: number,
		right: number,
		down: number,
	) => {
		// this submatrix has no height or no width
		if (left > right || up > down) {
			return false;
		}

		// `target` is already larger than the largest element or smaller
		// than the smallest element in this submatrix
		if (target < matrix[up][left] || target > matrix[down][right]) {
			return false;
		}

		const middleCol = Math.floor((left + right) / 2);

		// find `row` such that matrix[row-1][mid] < target < matrix[row][mid]
		let row = up;
		while (row <= down && matrix[row][middleCol] <= target) {
			if (matrix[row][middleCol] === target) {
				return true;
			}
			row++;
		}

		// search in left-down and up-right
		return (
			searchRec(left, row, middleCol - 1, down) ||
			searchRec(middleCol + 1, up, right, row - 1)
		);
	};

	return searchRec(0, 0, cols - 1, rows - 1);
}

export default searchMatrix;

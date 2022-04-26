type Queen = [row: number, col: number];

/**
 * time complexity O(N!)
 * space O(N)
 */
function totalNQueens(n: number): number {
	const queens: Queen[] = [];

	const isUnderAttack = (row: number, col: number) => {
		return queens.some(
			([queenRow, queenCol]) =>
				row === queenRow ||
				col === queenCol ||
				row - col === queenRow - queenCol ||
				row + col === queenRow + queenCol,
		);
	};

	const backtrackQueen = (row = 0, count = 0) => {
		for (let col = 0; col < n; col++) {
			if (!isUnderAttack(row, col)) {
				queens.push([row, col]);
				if (row + 1 === n) {
					count++;
				} else {
					count = backtrackQueen(row + 1, count);
				}
				queens.pop();
			}
		}

		return count;
	};

	return backtrackQueen();
}

export default totalNQueens;

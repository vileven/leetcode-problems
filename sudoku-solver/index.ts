const N = 9;

function solveSudoku(board: string[][]): void {
	let sudokuSolved = false;

	const rowsSets: Array<Set<number>> = Array.from(
		{length: N},
		() => new Set(),
	);

	const colsSets: Array<Set<number>> = Array.from(
		{length: N},
		() => new Set(),
	);

	const boxSets: Array<Set<number>> = Array.from(
		{length: N},
		() => new Set(),
	);

	const getCurrentBox = (row: number, col: number): Set<number> => {
		const rowBox = Math.ceil(((row + 1) / N) * 3) - 1;
		const colBox = Math.ceil(((col + 1) / N) * 3) - 1;

		return boxSets[3 * rowBox + colBox];
	};

	const addNumber = (row: number, col: number, num: number) => {
		rowsSets[row].add(num);
		colsSets[col].add(num);
		getCurrentBox(row, col).add(num);
		board[row][col] = num.toString();
	};

	const removeNumber = (row: number, col: number, num: number) => {
		rowsSets[row].delete(num);
		colsSets[col].delete(num);
		getCurrentBox(row, col).delete(num);
		board[row][col] = '.';
	};

	const isValidNumber = (row: number, col: number, num: number): boolean => {
		return (
			!rowsSets[row].has(num) &&
			!colsSets[col].has(num) &&
			!getCurrentBox(row, col).has(num)
		);
	};

	const goToNextNumber = (row: number, col: number) => {
		let nextCol;
		let nextRow;

		switch (true) {
			case col !== N - 1:
				nextCol = col + 1;
				nextRow = row;
				break;
			case col === N - 1 && row !== N - 1:
				nextCol = 0;
				nextRow = row + 1;
				break;
			case col === N - 1 && row === N - 1:
				sudokuSolved = true;
				return;
		}

		return backtrack(nextRow, nextCol);
	};

	const backtrack = (row: number = 0, col: number = 0) => {
		if (board[row][col] === '.') {
			for (let i = 1; i <= N; i++) {
				if (isValidNumber(row, col, i)) {
					addNumber(row, col, i);

					goToNextNumber(row, col);

					if (!sudokuSolved) {
						removeNumber(row, col, i);
					}
				}
			}
		} else {
			goToNextNumber(row, col);
		}
	};

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (board[i][j] !== '.') {
				addNumber(i, j, Number(board[i][j]));
			}
		}
	}

	return backtrack();
}

export default solveSudoku;

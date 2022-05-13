const directions = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
];

type Point = readonly [number, number];

const VISITED_SYM = '#';

function exist(board: string[][], word: string): boolean {
	const rows = board.length;
	const cols = board[0].length;

	if (rows * cols < word.length) {
		return false;
	}

	const isPointIn = ([x, y]: Point) => {
		return x < rows && y < cols && x >= 0 && y >= 0;
	};

	const backtrack = (point: Point = [0, 0], i = 0): boolean => {
		const [currentX, currentY] = point;

		if (i === word.length - 1) {
			return word[i] === board[currentX][currentY];
		}

		if (board[currentX][currentY] === word[i]) {
			board[currentX][currentY] = VISITED_SYM;
			for (const [diffX, diffY] of directions) {
				const nextPoint = [currentX + diffX, currentY + diffY] as const;
				const [newX, newY] = nextPoint;

				if (isPointIn(nextPoint) && word[i + 1] === board[newX][newY]) {
					if (backtrack(nextPoint, i + 1)) {
						return true;
					}
				}
			}
			board[currentX][currentY] = word[i];
		}

		return false;
	};

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (backtrack([i, j])) {
				return true;
			}
		}
	}

	return false;
}

export default exist;

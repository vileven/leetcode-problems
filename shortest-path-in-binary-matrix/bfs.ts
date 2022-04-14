type QueueParams = [row: number, col: number];

export function shortestPathBinaryMatrix(grid: number[][]): number {
	if (grid.length === 0) {
		return -1;
	}

	const queue: QueueParams[] = [[0, 0]];
	let result = 0;

	while (queue.length) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const [row, col] = queue.shift();

			const val = grid[row][col];

			if (val === 1) {
				continue;
			}

			if (row === grid.length - 1 && col === grid.length - 1) {
				return ++result;
			}

			grid[row][col] = 1;

			for (let j = -1; j <= 1; j++) {
				for (let k = -1; k <= 1; k++) {
					if (
						row + j >= 0 &&
						col + k >= 0 &&
						row + j < grid.length &&
						col + k < grid.length &&
						!grid[row + j][col + k]
					) {
						queue.push([row + j, col + k]);
					}
				}
			}
		}
		result++;
	}

	return -1;
}

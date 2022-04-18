const dirs = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1],
];

export function bfs(
	grid: number[][],
	r: number,
	c: number,
	totalHouses: number,
): number {
	const rows = grid.length;
	const cols = grid[0].length;

	let foundHouses = 0;
	let distance = 0;

	// space O(NM)
	const visited: boolean[][] = new Array(rows)
		.fill(false)
		.map(() => new Array(cols).fill(false));
	visited[r][c] = true;
	// space O(NM)
	let queue = [[r, c]];

	let path = 0;
	while (queue.length && foundHouses !== totalHouses) {
		const newQueue = [];

		for (let i = 0; i < queue.length; i++) {
			const [row, col] = queue[i];

			if (grid[row][col] === 1) {
				distance += path;
				foundHouses++;
				continue;
			}

			dirs.forEach(([diffRow, diffCol]) => {
				const nextRow = row + diffRow;
				const nextCol = col + diffCol;

				if (
					nextRow >= 0 &&
					nextCol >= 0 &&
					nextRow < rows &&
					nextCol < cols &&
					visited[nextRow][nextCol] !== true &&
					grid[nextRow][nextCol] !== 2
				) {
					visited[nextRow][nextCol] = true;
					newQueue.push([nextRow, nextCol]);
				}
			});
		}
		path++;
		queue = newQueue;
	}

	if (foundHouses !== totalHouses) {
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				if (grid[i][j] == 0 && visited[i][j] === true) {
					grid[i][j] = 2;
				}
			}
		}
		return Infinity;
	}

	return distance;
}
// say that N is rows count, M is cols count
// time O (N^2 * M^2)
// space O (NM)
function shortestDistance(grid: number[][]): number {
	let totalHouses = 0;

	// just calculate amount of houses
	// time O(N * M)
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			const element = grid[i][j];

			if (element === 1) {
				// its building
				totalHouses++;
			}
		}
	}

	let minDistance = Infinity;
	// time O (N * M * N * M)
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 0) {
				minDistance = Math.min(
					minDistance,
					bfs(grid, i, j, totalHouses),
				);
			}
		}
	}

	if (minDistance == Infinity) {
		return -1;
	}

	return minDistance;
}

export default shortestDistance;

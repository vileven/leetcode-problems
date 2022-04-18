const dirs = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1],
];

function bfs(
	grid: number[][],
	r: number,
	c: number,
	cellInfos: CellInfo[][],
	totalHouses: number,
) {
	const rows = grid.length;
	const cols = grid[0].length;

	let queue: Array<[row: number, column: number]> = [[r, c]];
	const visited: boolean[][] = new Array(rows)
		.fill(false)
		.map(() => new Array(cols).fill(false));
	visited[r][c] = true;

	let pathLength = 0;

	while (queue.length) {
		const newQueue: Array<[row: number, column: number]> = [];
		for (let i = 0; i < queue.length; i++) {
			const [row, col] = queue[i];

			cellInfos[row][col].distance += pathLength;
			cellInfos[row][col].housesAvailable++;

			dirs.forEach(([rowDiff, colDiff]) => {
				const newRow = row + rowDiff;
				const newCol = col + colDiff;

				if (
					newRow >= 0 &&
					newCol >= 0 &&
					newRow < rows &&
					newCol < cols &&
					!visited[newRow][newCol] &&
					grid[newRow][newCol] === 0
				) {
					visited[newRow][newCol] = true;
					newQueue.push([newRow, newCol]);
				}
			});
		}
		pathLength++;
		queue = newQueue;
	}
}

interface CellInfo {
	distance: number;
	housesAvailable: number;
}

function shortestDistance(grid: number[][]): number {
	const cellInfos: CellInfo[][] = [];
	const housesQueue: Array<[row: number, column: number]> = [];

	for (let i = 0; i < grid.length; i++) {
		cellInfos[i] = [];
		for (let j = 0; j < grid[0].length; j++) {
			cellInfos[i][j] = {distance: 0, housesAvailable: 0};

			if (grid[i][j] === 1) {
				housesQueue.push([i, j]);
			}
		}
	}

	const totalHouses = housesQueue.length;
	for (const [row, col] of housesQueue) {
		bfs(grid, row, col, cellInfos, totalHouses);
	}

	let minimumDistance = Infinity;
	for (let i = 0; i < cellInfos.length; i++) {
		for (let j = 0; j < cellInfos[0].length; j++) {
			const {distance, housesAvailable} = cellInfos[i][j];
			if (
				grid[i][j] === 0 &&
				distance < minimumDistance &&
				housesAvailable === totalHouses
			) {
				minimumDistance = distance;
			}
		}
	}

	return minimumDistance === Infinity ? -1 : minimumDistance;
}

export default shortestDistance;

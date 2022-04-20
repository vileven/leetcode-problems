class UnionFind {
	root: number[] = [];
	rank: number[] = [];
	area: number[] = [];

	constructor(size: number) {
		for (let i = 0; i < size; i++) {
			this.root[i] = i;
			this.rank[i] = 1;
			this.area[i] = 1;
		}
	}

	find(x: number): number {
		if (this.root[x] === x) {
			return x;
		}

		this.root[x] = this.find(this.root[x]);
		return this.root[x];
	}

	getArea(x: number): number {
		return this.area[this.find(x)];
	}

	union(x: number, y: number) {
		const rootX = this.find(x);
		const rootY = this.find(y!);

		if (rootX !== rootY) {
			switch (true) {
				case this.rank[rootX] > this.rank[rootY]:
					this.root[rootY] = rootX;
					this.area[rootX] += this.area[rootY];
					break;
				case this.rank[rootX] < this.rank[rootY]:
					this.root[rootX] = rootY;
					this.area[rootY] += this.area[rootX];
					break;
				case this.rank[rootX] === this.rank[rootY]:
					this.root[rootY] = rootX;
					this.area[rootX] += this.area[rootY];
					this.rank[rootX]++;
			}
		}
	}

	connected(x: number, y: number): boolean {
		return this.find(x) === this.find(y!);
	}
}

const dirs = [
	[-1, 0],
	[0, 1],
	[0, -1],
	[1, 0],
];

const createNeighbourGen = (grid: number[][], rows: number, cols: number) =>
	function* (row: number, col: number) {
		for (const [rowDiff, colDiff] of dirs) {
			const possibleRow = rowDiff + row;
			const possibleCol = colDiff + col;
			if (
				possibleRow >= 0 &&
				possibleRow < rows &&
				possibleCol >= 0 &&
				possibleCol < cols &&
				grid[possibleRow][possibleCol]
			) {
				yield [possibleRow, possibleCol];
			}
		}
	};

/**
 * time O(n^2)
 * space O(n^2)
 */
function largestIsland(grid: number[][]): number {
	const rows = grid.length;
	const cols = grid[0].length;

	const uf = new UnionFind(rows * cols);
	const neighbor = createNeighbourGen(grid, rows, cols);

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] === 1) {
				for (const [nRow, nCol] of neighbor(i, j)) {
					uf.union(i * cols + j, nRow * cols + nCol);
				}
			}
		}
	}

	let maxArea = 0;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j]) {
				maxArea = Math.max(maxArea, uf.getArea(uf.find(i * cols + j)));
			} else {
				let sumNearArea = 0;
				let hashRoot = {};
				for (const [nRow, nCol] of neighbor(i, j)) {
					const root = uf.find(nRow * cols + nCol);
					if (!hashRoot.hasOwnProperty(root)) {
						sumNearArea += uf.getArea(root);
						hashRoot[root] = true;
					}
				}

				maxArea = Math.max(maxArea, sumNearArea + 1);
			}
		}
	}

	return maxArea;
}

export default largestIsland;

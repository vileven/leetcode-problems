export class BinaryMatrix {
	mat: number[][];

	constructor(mat: number[][]) {
		this.mat = mat;
	}

	get(row: number, col: number): number {
		return this.mat[row][col];
	}

	dimensions(): number[] {
		return [this.mat.length, this.mat[0].length];
	}
}

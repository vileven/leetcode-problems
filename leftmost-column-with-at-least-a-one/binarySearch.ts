import {BinaryMatrix} from '.';

function binarySearch(
	binaryMatrix: BinaryMatrix,
	inRow: number = 0,
	cols: number,
) {
	let lo = 0;
	let hi = cols - 1;

	while (lo < hi) {
		const middle = Math.floor((hi + lo) / 2);

		const value = binaryMatrix.get(inRow, middle);

		if (value === 0) {
			lo = middle + 1;
		} else {
			hi = middle;
		}
	}

	return binaryMatrix.get(inRow, lo) === 1 ? lo : -1;
}

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
	const [rows, cols] = binaryMatrix.dimensions();

	let minCols = -1;
	for (let i = 0; i < rows; i++) {
		const index = binarySearch(binaryMatrix, i, cols);
		if ((index !== -1 && index < minCols) || minCols === -1) {
			minCols = index;
		}
	}

	return minCols;
}

export default leftMostColumnWithOne;

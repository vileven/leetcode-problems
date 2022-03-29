import {BinaryMatrix} from '.';

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
	const [rows, cols] = binaryMatrix.dimensions();

	let currentCol = cols - 1;
	let currentRow = 0;

	while (currentRow < rows && currentCol >= 0) {
		const value = binaryMatrix.get(currentRow, currentCol);

		if (value === 0) {
			currentRow++;
		} else {
			currentCol--;
		}
	}

	if (currentCol === cols - 1) {
		return -1;
	}

	return currentCol + 1;
}

export default leftMostColumnWithOne;

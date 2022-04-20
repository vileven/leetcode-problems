function getRow(rowIndex: number): number[] {
	const result = [1];
	for (let i = 1; i <= rowIndex; i++) {
		result[i] = (result[i - 1] * (rowIndex - i + 1)) / i;
	}

	return result;
}

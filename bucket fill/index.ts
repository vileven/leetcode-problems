function fill(arr: string[][], c: string, i: number, j: number) {
	if (arr[i][j] != c) return;
	arr[i][j] = '-';
	if (i - 1 >= 0) fill(arr, c, i - 1, j);
	if (j - 1 >= 0) fill(arr, c, i, j - 1);
	if (i + 1 < arr.length) fill(arr, c, i + 1, j);
	if (j + 1 < arr[i].length) fill(arr, c, i, j + 1);
}

function strokesRequired(picture: string[]): number {
	let index = 0;
	const matrix = [];
	for (let i = 0; i < picture.length; i++) {
		matrix[index++] = picture[i].split('');
	}
	let count = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] != '-') {
				// '-' indicates visited
				fill(matrix, matrix[i][j], i, j);
				count++;
			}
		}
	}
	return count;
}

import searchMatrix from './linear';

describe('search-a-2d-matrix-ii linear.ts', () => {
	it('should work 0', () => {
		expect(
			searchMatrix(
				[
					[1, 4, 7, 11, 15],
					[2, 5, 8, 12, 19],
					[3, 6, 9, 16, 22],
					[10, 13, 14, 17, 24],
					[18, 21, 23, 26, 30],
				],
				5,
			),
		).toBe(true);
	});

	it('should work 1', () => {
		expect(
			searchMatrix(
				[
					[1, 4, 7, 11, 15],
					[2, 5, 8, 12, 19],
					[3, 6, 9, 16, 22],
					[10, 13, 14, 17, 24],
					[18, 21, 23, 26, 30],
				],
				20,
			),
		).toBe(false);
	});

	it('should work 2', () => {
		expect(
			searchMatrix(
				[
					[1, 4, 7, 11, 15],
					[2, 5, 8, 12, 19],
					[3, 6, 9, 16, 22],
					[10, 13, 14, 17, 24],
					[18, 21, 23, 26, 30],
				],
				10,
			),
		).toBe(true);
	});

	it('should work 3', () => {
		expect(searchMatrix([[-5]], -5)).toBe(true);
	});
});

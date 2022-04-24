import sortArray from './quickSort';

describe('sort-an-array quickSort', () => {
	it('should work', () => {
		expect(sortArray([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5]);
	});

	it('should work 2', () => {
		expect(sortArray([-1, 2, -8, -10])).toStrictEqual([-10, -8, -1, 2]);
	});

	it('should work 3', () => {
		expect(sortArray([4, 5, 6, 7, 2, 10])).toStrictEqual([
			2, 4, 5, 6, 7, 10,
		]);
	});

	it('should work 4', () => {
		expect(sortArray([5, 1, 1, 2, 0, 0])).toStrictEqual([0, 0, 1, 1, 2, 5]);
	});
});

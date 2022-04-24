import sortArray from './mergeSortUpBottom';

describe('sort-an-array mergeSortUpBottom', () => {
	it('should work', () => {
		expect(sortArray([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5]);
	});
});

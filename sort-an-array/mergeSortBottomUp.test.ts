import sortArray from './mergeSortBottomUp';

describe('sort-an-array mergeSortUpBottom', () => {
	it('should work with to elemets', () => {
		expect(sortArray([3, 2])).toStrictEqual([2, 3]);
	});
	it('should work', () => {
		expect(sortArray([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5]);
	});
});

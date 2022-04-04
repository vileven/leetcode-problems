import findKthLargest from './sorting';

describe('kth-largest-element-in-an-array sorting', () => {
	it('should work with test case 1', () => {
		expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
	});

	it('should work with test case 2', () => {
		expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
	});
});

import checkSubarraySum from '.';

describe('continuous-subarray-sum', () => {
	it('should work with test case1', () => {
		expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true);
	});

	it('should work with test case2', () => {
		expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true);
	});

	it('should work test case3', () => {
		expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBe(false);
	});

	it('should work test case4', () => {
		expect(checkSubarraySum([5, 0, 0, 0], 3)).toBe(true);
	});
});

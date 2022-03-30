import subarraySum from './hashmap';

describe('subarray-sum-equals-k hashmap', () => {
	it('should work with example1', () => {
		expect(subarraySum([1, 1, 1], 2)).toBe(2);
	});

	it('should work with example2', () => {
		expect(subarraySum([1, 2, 3], 3)).toBe(2);
	});

	it('should work with 67 test case', () => {
		expect(subarraySum([1], 0)).toBe(0);
	});

	it('should work with 70 test case', () => {
		expect(subarraySum([1, -1, 0], 0)).toBe(3);
	});
});

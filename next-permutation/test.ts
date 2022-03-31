import nextPermutation from './index';

describe('next-permutation', () => {
	/**
	 * [1,2,3]
	 * [1,3,2] -> [2 ,3,1] -> [2, 1, 3]
	 * [2,1,3]
	 * [2,3,1]
	 * [3,1,2]
	 * [3,2,1]
	 */

	it('should work with example 1', () => {
		const testArr = [1, 2, 3];

		nextPermutation(testArr);

		expect(testArr).toEqual([1, 3, 2]);
	});

	it('should work with my example 1', () => {
		const testArr = [1, 3, 2];

		nextPermutation(testArr);

		expect(testArr).toEqual([2, 1, 3]);
	});

	it('should work with example 2', () => {
		const testArr = [3, 2, 1];

		nextPermutation(testArr);

		expect(testArr).toEqual([1, 2, 3]);
	});

	it('should work with example 3', () => {
		const testArr = [1, 1, 5];

		nextPermutation(testArr);

		expect(testArr).toEqual([1, 5, 1]);
	});

	it('should work with 244 test case', () => {
		const testArr = [2, 3, 1, 3, 3];

		nextPermutation(testArr);

		expect(testArr).toEqual([2, 3, 3, 1, 3]);
	});
});

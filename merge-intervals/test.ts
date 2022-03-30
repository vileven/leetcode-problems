import merge from './index';

describe('merge-intervals', () => {
	it('should work with example1', () => {
		expect(
			merge([
				[1, 3],
				[2, 6],
				[8, 10],
				[15, 18],
			]),
		).toStrictEqual([
			[1, 6],
			[8, 10],
			[15, 18],
		]);
	});

	it('should work with example2', () => {
		expect(
			merge([
				[1, 4],
				[4, 5],
			]),
		).toStrictEqual([[1, 5]]);
	});

	it('should work with 22 test case', () => {
		expect(
			merge([
				[1, 4],
				[1, 5],
			]),
		).toStrictEqual([[1, 5]]);
	});

	it('should work with 26 test case', () => {
		expect(
			merge([
				[1, 4],
				[2, 3],
			]),
		).toStrictEqual([[1, 4]]);
	});

	it('should work with 28 test case', () => {
		/**
		 * [0, 2],
		 * [1, 4],
		 * [3, 5],
		 */
		expect(
			merge([
				[1, 4],
				[0, 2],
				[3, 5],
			]),
		).toStrictEqual([[0, 5]]);
	});

	it('should work with 77 test case', () => {
		expect(
			merge([
				[1, 4],
				[5, 6],
			]),
		).toStrictEqual([
			[1, 4],
			[5, 6],
		]);
	});

	it('should work with 94 test case', () => {
		expect(
			merge([
				[1, 3],
				[5, 7],
				[4, 6],
			]),
		).toStrictEqual([
			[1, 3],
			[4, 7],
		]);
	});
});

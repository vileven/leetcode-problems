import shortestDistance from './bfsFromHousesToEmptyOptimized';

describe('shortest-distance-from-all-buildings bfsFromHousesToEmptyOptimized.ts', () => {
	it('should should work with testCase', () => {
		expect(
			shortestDistance([
				[1, 0, 2, 0, 1],
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
			]),
		).toBe(7);
	});

	it('should should work with testCase2', () => {
		expect(shortestDistance([[1, 0]])).toBe(1);
	});

	it('should should work with testCase3', () => {
		expect(
			shortestDistance([
				[1, 1],
				[0, 1],
			]),
		).toBe(-1);
	});
});

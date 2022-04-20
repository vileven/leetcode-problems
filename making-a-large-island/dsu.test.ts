import largestIsland from './dsu';

describe('making-a-large-island dsu', () => {
	it('should work with case 1', () => {
		expect(
			largestIsland([
				[1, 0],
				[0, 1],
			]),
		).toBe(3);
	});

	it('should work with case 2', () => {
		expect(
			largestIsland([
				[1, 1],
				[1, 0],
			]),
		).toBe(4);
	});

	it('should work with case 3', () => {
		expect(
			largestIsland([
				[1, 1],
				[1, 1],
			]),
		).toBe(4);
	});
});

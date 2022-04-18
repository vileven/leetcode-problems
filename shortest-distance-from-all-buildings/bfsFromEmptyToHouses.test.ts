import shortestDistance, {bfs} from './bfsFromEmptyToHouses';

describe('shortest-distance-from-all-buildings bfsFromEmptyToHouses.ts', () => {
	it('should should work with testCase', () => {
		expect(
			shortestDistance([
				[1, 0, 2, 0, 1],
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
			]),
		).toBe(7);
	});

	it(' bfs should work', () => {
		expect(
			bfs(
				[
					[1, 0, 0],
					[0, 0, 0],
					[0, 0, 1],
				],
				1,
				1,
				2,
			),
		).toBe(4);
	});
});

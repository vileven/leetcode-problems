import generateTrees from './index';

describe('unique-binary-search-trees-ii', () => {
	[
		[1, null, 2, null, 3, null, 4],
		[1, null, 2, null, 4, 3],
		[1, null, 3, 2, 4],
		[1, null, 4, 2, null, null, 3],
		[1, null, 4, 3, null, 2],
		[2, 1, 3, null, null, null, 4],
		[2, 1, 4, null, null, 3],
		[3, 1, 4, null, 2],
		[3, 2, 4, 1],
		[4, 1, null, null, 2, null, 3],
		[4, 1, null, null, 3, 2],
		[4, 2, null, 1, 3],
		[4, 3, null, 1, null, null, 2],
		[4, 3, null, 2, null, 1],
	];

	[
		[1, null, 2, null, 3, null, 4],
		[1, null, 3, 2, 4, null, 4],
		[1, null, 4, 3],
		[2, 1, 3, null, 3, null, 4, null, 4],
		[2, null, 4, 3],
		[3, 1, null, null, 2, null, 4],
		[3, 2, 4, 1, 4, 2, null, null, 4],
		[4, 1, null, null, 2, null, 3],
		[4, 2, null, 1, 3, null, 3],
		[4, 3, null, 2],
	];

	it('generateTrees ', () => {
		expect(generateTrees(4).length).toBe(5);
	});
});

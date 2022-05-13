import exist from './index';

describe('word-search', () => {
	it('should work with test case 0', () => {
		expect(
			exist(
				[
					['A', 'B', 'C', 'E'],
					['S', 'F', 'C', 'S'],
					['A', 'D', 'E', 'E'],
				],
				'ABCCED',
			),
		).toBe(true);
	});

	it('should work with test case 1', () => {
		expect(
			exist(
				[
					['A', 'B'],
					['S', 'F'],
				],
				'SA',
			),
		).toBe(true);
	});

	it('should work with test case 2', () => {
		expect(
			exist(
				[
					['A', 'B'],
					['S', 'F'],
				],
				'AK',
			),
		).toBe(false);
	});

	it('should work with test case 3', () => {
		expect(
			exist(
				[
					['A', 'B'],
					['S', 'F'],
				],
				'AF',
			),
		).toBe(false);
	});

	it('should work with test case 4', () => {
		expect(
			exist(
				[
					['A', 'B', 'C', 'E'],
					['S', 'F', 'C', 'S'],
					['A', 'D', 'E', 'E'],
				],
				'ABCB',
			),
		).toBe(false);
	});

	it('should work with test case 5', () => {
		expect(exist([['a']], 'b')).toBe(false);
	});

	it('should work with test case 6', () => {
		expect(exist([['a', 'a']], 'aaa')).toBe(false);
	});

	it('should work with test case 7', () => {
		expect(
			exist(
				[
					['A', 'B', 'C', 'E'],
					['S', 'F', 'E', 'S'],
					['A', 'D', 'E', 'E'],
				],
				'ABCEFSADEESE',
			),
		).toBe(true);
	});

	it('should work with test case 8', () => {
		expect(
			exist(
				[
					['a', 'a', 'a', 'a'],
					['a', 'a', 'a', 'a'],
					['a', 'a', 'a', 'a'],
				],
				'aaaaaaaaaaab',
			),
		).toBe(false);
	});

	it('should work with test case 9', () => {
		expect(
			exist(
				[
					['b', 'b'],
					['a', 'b'],
					['b', 'a'],
				],
				'a',
			),
		).toBe(true);
	});
});

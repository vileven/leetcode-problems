import isAlienSorted from './withHash';

describe('verifying-an-alien-dictionary with Hash of Alphabet', () => {
	it('should return true if 1 world', () => {
		expect(isAlienSorted(['kek'], 'abcdefghijklmnopqrstuvwxyz')).toBe(true);
	});

	it('should work with standard alphabet', () => {
		expect(
			isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'),
		).toBe(false);
	});

	it('should work with standard alphabet true', () => {
		expect(
			isAlienSorted(['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz'),
		).toBe(true);
	});

	it('should work with decision false', () => {
		expect(
			isAlienSorted(
				['word', 'world', 'row'],
				'worldabcefghijkmnpqstuvxyz',
			),
		).toBe(false);
	});

	it('should work with decision true', () => {
		expect(
			isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'),
		).toBe(true);
	});
});

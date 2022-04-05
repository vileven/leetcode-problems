import wordBreak from './dynamicProgramming';

describe('word-break dynamicProgramming', () => {
	it('should work with example 1', () => {
		expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
	});

	it('should work with example 2', () => {
		expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
	});

	it('should work with example 3', () => {
		expect(
			wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']),
		).toBe(false);
	});
});

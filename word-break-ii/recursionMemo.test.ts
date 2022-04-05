import wordBreak from './recursionMemo';

describe('word-break dynamicProgramming', () => {
	it('should work with example 1', () => {
		expect(
			wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']),
		).toStrictEqual(['cat sand dog', 'cats and dog']);
	});
});

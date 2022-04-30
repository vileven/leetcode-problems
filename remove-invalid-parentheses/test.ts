import removeInvalidParentheses from './index';

describe('remove-invalid-parentheses', () => {
	it('should work 1', () => {
		expect(removeInvalidParentheses('()())()')).toStrictEqual([
			'(())()',
			'()()()',
		]);
	});
});

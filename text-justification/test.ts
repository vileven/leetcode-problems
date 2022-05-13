import fullJustify from './index';

describe('text-justification', () => {
	it('should work with test case 0', () => {
		expect(
			fullJustify(
				['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
				16,
			),
		).toStrictEqual([
			'This    is    an',
			'example  of text',
			'justification.  ',
		]);
	});

	it('should work with test case 1', () => {
		expect(
			fullJustify(
				['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
				16,
			),
		).toStrictEqual([
			'What   must   be',
			'acknowledgment  ',
			'shall be        ',
		]);
	});

	it('should work with test case 2', () => {
		expect(
			fullJustify(
				[
					'Science',
					'is',
					'what',
					'we',
					'understand',
					'well',
					'enough',
					'to',
					'explain',
					'to',
					'a',
					'computer.',
					'Art',
					'is',
					'everything',
					'else',
					'we',
					'do',
				],
				20,
			),
		).toStrictEqual([
			'Science  is  what we',
			'understand      well',
			'enough to explain to',
			'a  computer.  Art is',
			'everything  else  we',
			'do                  ',
		]);
	});
});

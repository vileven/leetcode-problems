import validPalindrome from './twoPointers';

describe('valid-palindrome-ii twoPointers', () => {
	it('should work with palindrome strings', () => {
		expect(validPalindrome('aba')).toBe(true);
	});

	it('should recognize palindrome after deleting 1 character', () => {
		expect(validPalindrome('abca')).toBe(true);
	});

	it('should work with single char', () => {
		expect(validPalindrome('a')).toBe(true);
	});

	it('should work with even palindrome single char', () => {
		expect(validPalindrome('adaaa')).toBe(true);
	});

	it('should return false when string not palindrome and cannot be after deleting 1 char', () => {
		expect(validPalindrome('abc')).toBe(false);
	});

	it('should correctly work with "eddze" string', () => {
		expect(validPalindrome('eddze')).toBe(true);
	});

	it('should correctly work with "eeccccbebaeeabebccceea" string', () => {
		expect(validPalindrome('eeccccbebaeeabebccceea')).toBe(false);
	});

	it(
		'should correctly work with ' +
			'"aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga" string',
		() => {
			expect(
				validPalindrome(
					'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
				),
			).toBe(true);
		},
	);

	it('should correctly work with "ebcbbececabbacecbbcbe" string', () => {
		expect(validPalindrome('ebcbbececabbacecbbcbe')).toBe(true);
	});
});

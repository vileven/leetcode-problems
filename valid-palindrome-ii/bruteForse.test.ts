import validPalindrome from './bruteForce';

describe('valid-palindrome-ii bruteForce', () => {
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
});

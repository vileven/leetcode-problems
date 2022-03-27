/**
 * 680. Valid Palindrome II
 * Given a string 's', return 'true' if the 's' can be palindrome after deleting at most one character from it.
 *
 * O(n^2)
 */
function validPalindrome(s: string): boolean {
	for (let i = 0; i <= s.length; i++) {
		let isPalindrome = true;

		// check if substring exclude i is palindrome
		const middleIndex = Math.floor(s.length / 2);
		let forwardIndex = 0;
		let reverseIndex = s.length - 1;
		while (forwardIndex < middleIndex) {
			if (forwardIndex === i) {
				forwardIndex++;
			}

			if (reverseIndex === i) {
				reverseIndex--;
			}

			if (s[forwardIndex] !== s[reverseIndex]) {
				isPalindrome = false;
				break;
			}

			forwardIndex++;
			reverseIndex--;
		}

		if (isPalindrome) {
			return true;
		}
	}

	return false;
}

export default validPalindrome;

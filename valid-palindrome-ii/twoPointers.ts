/**
 * 680. Valid Palindrome II
 * Given a string 's', return 'true' if the 's' can be palindrome after deleting at most one character from it.
 *
 * O(n)
 */
function checkPalindromeWithIndexAnd1Deleting(
	s: string,
	forwardIndex: number,
	reverseIndex: number,
	only1removingEnabled = false,
): boolean {
	let isPalindrome = true;
	let resultForward = false;
	let resultReverse = false;
	const middleIndex = Math.floor(s.length / 2);

	while (forwardIndex < middleIndex || reverseIndex > middleIndex) {
		if (s[forwardIndex] !== s[reverseIndex]) {
			if (!only1removingEnabled) {
				resultForward = checkPalindromeWithIndexAnd1Deleting(
					s,
					forwardIndex + 1,
					reverseIndex,
					true,
				);

				resultReverse = checkPalindromeWithIndexAnd1Deleting(
					s,
					forwardIndex,
					reverseIndex - 1,
					true,
				);
			}

			isPalindrome = resultForward || resultReverse;
			break;
		}

		forwardIndex++;
		reverseIndex--;
		isPalindrome = true;
	}

	return isPalindrome;
}

function validPalindrome(s: string): boolean {
	return checkPalindromeWithIndexAnd1Deleting(s, 0, s.length - 1);
}

export default validPalindrome;

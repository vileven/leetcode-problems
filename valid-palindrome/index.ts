export const ZERO_CODE = '0'.charCodeAt(0);
export const NINE_CODE = '9'.charCodeAt(0);
const a_CODE = 'a'.charCodeAt(0);
const z_CODE = 'z'.charCodeAt(0);
const A_CODE = 'A'.charCodeAt(0);
const Z_CODE = 'Z'.charCodeAt(0);

function isLetterOrDigit(char: string) {
	const code = char.charCodeAt(0);
	return (
		(ZERO_CODE <= code && code <= NINE_CODE) ||
		(a_CODE <= code && code <= z_CODE) ||
		(A_CODE <= code && code <= Z_CODE)
	);
}

/**
 * time O(n)
 * space O(1)
 */
function isPalindrome(s: string): boolean {
	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		while (i < j && !isLetterOrDigit(s[i])) {
			i++;
		}

		while (i < j && !isLetterOrDigit(s[j])) {
			j--;
		}

		if (s[i].toLowerCase() !== s[j].toLowerCase()) {
			return false;
		}
	}

	return true;
}

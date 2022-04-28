const digitMap = {
	'2': ['a', 'b', 'c'],
	'3': ['d', 'e', 'f'],
	'4': ['g', 'h', 'i'],
	'5': ['j', 'k', 'l'],
	'6': ['m', 'n', 'o'],
	'7': ['p', 'q', 'r', 's'],
	'8': ['t', 'u', 'v'],
	'9': ['w', 'x', 'y', 'z'],
} as const;

/**
 * time O(4^N * N)
 * space O(N)
 */
function letterCombinations(digits: string): string[] {
	const result = [];

	if (!digits.length) {
		return result;
	}

	const backtrack = (first = 0, acc: string = '') => {
		if (first === digits.length) {
			result.push(acc);
			return;
		}

		digitMap[digits[first]].forEach(letter => {
			acc += letter;

			backtrack(first + 1, acc);

			acc = acc.slice(0, -1);
		});
	};

	backtrack();

	return result;
}

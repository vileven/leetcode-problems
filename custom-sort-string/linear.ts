/**
 * time N
 * space O(N)
 */
function customSortString(order: string, s: string): string {
	const alphabet = {};
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (!alphabet.hasOwnProperty(char)) {
			alphabet[char] = 0;
		}

		alphabet[char]++;
	}

	let result = '';
	for (let i = 0; i < order.length; i++) {
		const letter = order[i];
		if (alphabet.hasOwnProperty(letter)) {
			result += letter.repeat(alphabet[letter]);
			alphabet[letter] = 0;
		}
	}

	for (const letter in alphabet) {
		result += letter.repeat(alphabet[letter]);
	}

	return result;
}

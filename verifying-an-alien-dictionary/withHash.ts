function isAlienSorted(words: string[], order: string): boolean {
	let alphabet = {};

	if (words.length === 1) {
		return true;
	}

	for (let i = 0; i < order.length; i++) {
		const char = order[i];
		alphabet[char] = i;
	}

	for (let i = 0; i < words.length - 1; i++) {
		const word = words[i];
		const nextWord = words[i + 1];

		let j = null;
		for (j = 0; j < word.length; j++) {
			if (alphabet[word[j]] === alphabet[nextWord[j]]) {
				continue;
			}

			if (j === nextWord.length) {
				return false;
			}

			if (alphabet[word[j]] < alphabet[nextWord[j]]) {
				break;
			} else {
				return false;
			}
		}
	}

	return true;
}

export default isAlienSorted;

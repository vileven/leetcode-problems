function isAlienSorted(words: string[], order: string): boolean {
	if (words.length === 1) {
		return true;
	}

	for (let i = 0; i < words.length - 1; i++) {
		const word = words[i];
		const nextWord = words[i + 1];

		let j = null;
		for (j = 0; j < word.length; j++) {
			if (j === nextWord.length) {
				return false;
			}

			const fOrder = order.indexOf(word[j]);
			const nextOrder = order.indexOf(nextWord[j]);
			if (fOrder === nextOrder) {
				continue;
			}

			if (fOrder < nextOrder) {
				break;
			} else {
				return false;
			}
		}
	}

	return true;
}

export default isAlienSorted;

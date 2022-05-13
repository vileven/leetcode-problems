/**
 * Say, words.length is N, maxLen word or chars is K
 * time O(N * K)
 * space O(K)
 */
function countCharacters(words: string[], chars: string): number {
	// create hashMap with all chars
	const alphaBet = new Map<string, number>();
	for (const char of chars) {
		alphaBet.set(char, (alphaBet.get(char) ?? 0) + 1);
	}

	// we will reuse single temp hashMap to reduce memory usage
	const tempMap = new Map<string, number>();
	return words.reduce((acc, word) => {
		// for every word we check is it possible to construct it with chars
		const canCreateWord = [...word].every(char => {
			tempMap.set(char, (tempMap.get(char) ?? 0) + 1);

			return alphaBet.get(char) - tempMap.get(char) >= 0;
		});

		// if yes, increase acc with word length
		if (canCreateWord) {
			acc += word.length;
		}

		// have to clear tempMap before next word
		tempMap.clear();
		return acc;
	}, 0);
}

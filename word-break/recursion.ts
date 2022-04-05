function wordBreak(s: string, wordDict: string[], from = 0): boolean {
	if (from === s.length) {
		return true;
	}

	const wordSet = new Set(wordDict);

	for (let end = from + 1; end <= s.length; end++) {
		if (wordSet.has(s.substring(from, end))) {
			if (wordBreak(s, wordDict, end)) {
				return true;
			}
		}
	}

	return false;
}

export default wordBreak;

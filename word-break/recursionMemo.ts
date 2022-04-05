function wordBreak(s: string, wordDict: string[]): boolean {
	return wordBreakMemo(s, new Set<string>(wordDict), 0, []);
}

function wordBreakMemo(
	s: string,
	wordSet: Set<string>,
	from: number,
	memo: boolean[],
): boolean {
	if (from === s.length) {
		return true;
	}

	if (typeof memo[from] === 'boolean') {
		return memo[from];
	}

	for (let end = from + 1; end <= s.length; end++) {
		if (wordSet.has(s.substring(from, end))) {
			if (wordBreakMemo(s, wordSet, end, memo)) {
				memo[from] = true;
				return true;
			}
		}
	}

	memo[from] = false;
	return false;
}

export default wordBreak;

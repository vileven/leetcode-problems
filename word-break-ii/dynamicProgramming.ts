function wordBreak(s: string, wordDict: string[]): string[] {
	const wordSet = new Set(wordDict);

	const dp = [['']];

	// cycle for end substring
	for (let end = 1; end <= s.length; end++) {
		// cycle for start substring
		for (let start = 0; start < end; start++) {
			// check if substring in dict, and previous substring also
			const substring = s.substring(start, end);
			if (typeof dp[start] === 'object' && wordSet.has(substring)) {
				if (!dp[end]) {
					dp[end] = [];
				}

				// we concat to all previous variants substring
				dp[end].push(
					...dp[start].map((el) =>
						el === '' ? substring : `${el} ${substring}`,
					),
				);
			}
		}
	}

	return dp[s.length] || [];
}

export default wordBreak;

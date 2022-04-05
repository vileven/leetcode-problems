function wordBreak(s: string, wordDict: string[]): string[] {
	const result = [];
	wordBreakMemo(s, new Set<string>(wordDict), 0, {}, '', result);

	return result;
}

function wordBreakMemo(
	s: string,
	wordSet: Set<string>,
	from: number,
	memo = {},
	subsequence = '',
	result: string[] = [],
): boolean {
	if (from === s.length) {
		result.push(subsequence);
		return true;
	}

	if (typeof memo[subsequence] === 'string') {
		return memo[subsequence];
	}

	for (let end = from + 1; end <= s.length; end++) {
		const newSubseq = s.substring(from, end);
		const newnewSub =
			subsequence === '' ? newSubseq : `${subsequence} ${newSubseq}`;

		if (wordSet.has(newSubseq)) {
			if (wordBreakMemo(s, wordSet, end, memo, newnewSub, result)) {
				memo[subsequence] = true;
			}
		}
	}

	memo[subsequence] = false;
	return false;
}

export default wordBreak;

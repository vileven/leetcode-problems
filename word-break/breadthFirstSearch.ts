function wordBreak(s: string, wordDict: string[]): boolean {
	const wordSet = new Set(wordDict);
	const queue = [0];
	const visited: boolean[] = [];

	while (queue.length) {
		const start = queue.shift();
		if (typeof visited[start] === 'boolean') {
			continue;
		}

		for (let end = start + 1; end <= s.length; end++) {
			if (wordSet.has(s.substring(start, end))) {
				if (end === s.length) {
					return true;
				}

				visited[start] = true;
				queue.push(end);
			}
		}
	}

	return false;
}

export default wordBreak;

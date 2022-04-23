function numTrees(n: number, memo: {[key: number]: number} = {}): number {
	if (n <= 1) {
		return 1;
	}

	if (memo.hasOwnProperty(n)) {
		return memo[n];
	}

	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += numTrees(i - 1, memo) * numTrees(n - i, memo);
	}

	memo[n] = result;

	return result;
}

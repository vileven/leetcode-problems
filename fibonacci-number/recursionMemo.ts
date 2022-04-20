function fib(n: number, memo: {[key: number]: number} = {}): number {
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	if (memo[n]) {
		return memo[n];
	}

	memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
	return memo[n];
}

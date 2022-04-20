// actually it is fibonacci number
// cause on Nth step we can make only 1 step from (n - 1)th and 2 from (n-2)th
function climbStairs(n: number, memo: {[key: number]: number} = {}): number {
	if (n == 1) {
		return 1;
	}

	if (n === 2) {
		return 2;
	}

	if (n === 3) {
		return 3;
	}

	if (n === 4) {
		return 5;
	}

	if (memo[n]) {
		return memo[n];
	}

	memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
	return memo[n];
}

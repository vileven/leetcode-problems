function combine(n: number, k: number): number[][] {
	const result = [];

	const backtrack = (first = 1, stack = []) => {
		if (stack.length === k) {
			result.push([...stack]);
		}

		for (let i = first; i <= n; i++) {
			stack.push(i);

			backtrack(i + 1, stack);

			stack.pop();
		}
	};

	backtrack();

	return result;
}

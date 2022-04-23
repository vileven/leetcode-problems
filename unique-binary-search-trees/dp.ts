export function numTrees(n: number): number {
	const C = [1, 1];

	for (let i = 2; i <= n; i++) {
		C[i] = 0;
		for (let j = 1; j <= i; j++) {
			C[i] += C[j - 1] * C[i - j];
		}
	}

	return C[n];
}

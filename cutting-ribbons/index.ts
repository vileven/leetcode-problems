function isCutPossible(
	array: number[],
	lengthOfRibbon: number,
	k: number,
): boolean {
	return (
		array.reduce(
			(acc, currentEl) => acc + Math.floor(currentEl / lengthOfRibbon),
			0,
		) >= k
	);
}

function maxLength(ribbons: number[], k: number): number {
	let left = 1;

	let max = -Infinity;

	const totalSum = ribbons.reduce((sum, el) => {
		max = Math.max(max, el);
		return sum + el;
	}, 0);

	if (totalSum < k) {
		return 0;
	}

	let right = Math.min(Math.floor(totalSum / k), max);

	// upper bound binary search of valid results
	while (left < right) {
		const middle = left + Math.floor((right - left + 1) / 2);

		if (isCutPossible(ribbons, middle, k)) {
			left = middle;
		} else {
			right = middle - 1;
		}
	}

	return left;
}

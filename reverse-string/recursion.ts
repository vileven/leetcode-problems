function swap(s: string[], i1: number, i2: number) {
	if (i1 >= i2) {
		return;
	}

	[s[i1], s[i2]] = [s[i2], s[i1]];
	swap(s, i1 + 1, i2 - 1);
}

/**
 * Do not return anything, modify s in-place instead.
 * should be O(1) space
 */
function reverseString(s: string[]): void {
	swap(s, 0, s.length - 1);
}

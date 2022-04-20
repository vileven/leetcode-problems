/**
 Do not return anything, modify s in-place instead.
 * should be O(1) space
 */
export function reverseString(s: string[]): void {
	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		[s[i], s[j]] = [s[j], s[i]];

		i++;
		j--;
	}
}

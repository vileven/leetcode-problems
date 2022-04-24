/**
 * life is short — use JavaScript
 */
function sortArray(nums: number[]): number[] {
	return nums.sort((a, b) => (a < b ? -1 : 1));
}

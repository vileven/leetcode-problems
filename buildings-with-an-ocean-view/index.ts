/**
 * time O(n)
 * space O(1)
 */
function findBuildings(heights: number[]): number[] {
	const result = [];

	let max = 0;
	for (let i = heights.length - 1; i >= 0; i--) {
		if (heights[i] > max) {
			max = heights[i];
			result.push(i);
		}
	}

	return result.reverse();
}

export default findBuildings;

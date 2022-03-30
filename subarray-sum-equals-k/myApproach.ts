/**
 * O(n^2)
 * @param nums
 * @param k
 */
function subarraySum(nums: number[], k: number): number {
	const prefixSums = [];

	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		prefixSums[i] = 0;

		for (let j = 0; j < prefixSums.length; j++) {
			const sum = prefixSums[j];
			if (sum === k && j !== i) {
				count++;
			}

			prefixSums[j] = sum + num;
		}
	}

	return prefixSums.reduce((acc, el) => (el === k ? acc + 1 : acc), count);
}

export default subarraySum;

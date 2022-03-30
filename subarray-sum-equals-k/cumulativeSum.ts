/**
 * O(n^2)
 * @param nums
 * @param k
 */
function subarraySum(nums: number[], k: number): number {
	let count = 0;
	const cumSum = [0];
	for (let i = 1; i <= nums.length; i++) {
		cumSum[i] = cumSum[i - 1] + nums[i - 1];
	}

	for (let start = 0; start < nums.length; start++) {
		for (let end = start + 1; end <= nums.length; end++) {
			if (cumSum[end] - cumSum[start] == k) count++;
		}
	}

	return count;
}

export default subarraySum;

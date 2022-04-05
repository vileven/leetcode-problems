/**
 * O(n^2)
 * @param nums
 * @param k
 */

//s[j] - s[i] = k -> s[j] - k = s[i]
// j > i -> we can go through array with j and check previous calculations of i in map
function subarraySum(nums: number[], k: number): number {
	let count = 0,
		sum = 0;
	const map = new Map();

	map.set(0, 1);

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		if (map.has(sum - k)) {
			count += map.get(sum - k);
		}

		map.set(sum, (map.get(sum) || 0) + 1);
	}

	return count;
}

export default subarraySum;

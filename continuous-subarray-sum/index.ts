/**
 * s[j] - s[i] = k -> s[j] - k = s[i]
 * j > i -> we can go through array with j and check previous calculations of i in map
 *
 * Also, say that s[i] = k * x + modk_x and s[j] = k * y + modl_y, suppose that modk_1 == modk_2
 * and we can say that s[i] - s[j] = k * (x - y) = k * constant
 *
 * So we can go in in loop with j index and check previuos modk
 *
 * time O(n)
 * space O(n)
 */
function checkSubarraySum(nums: number[], k: number): boolean {
	const hash = {0: -1};
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		let reminder = sum;
		if (k != 0) {
			reminder = sum % k;
		}

		if (hash.hasOwnProperty(reminder)) {
			if (i - hash[reminder] > 1) {
				return true;
			}
		} else {
			hash[reminder] = i;
		}
	}

	return false;
}

export default checkSubarraySum;

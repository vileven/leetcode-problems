/**
 *  time O(P(n,k)) => O(n! /(n - k)!) => O(n!)
 *  space O(n!)
 */

function permute(nums: number[]): number[][] {
	const result = [];

	const backtracking = (first = 0) => {
		if (first === nums.length) {
			result.push([...nums]);
			return;
		}

		for (let i = first; i < nums.length; i++) {
			[nums[first], nums[i]] = [nums[i], nums[first]];

			backtracking(first + 1);

			[nums[first], nums[i]] = [nums[i], nums[first]];
		}
	};

	backtracking();

	return result;
}

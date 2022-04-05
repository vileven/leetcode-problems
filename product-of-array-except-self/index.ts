function productExceptSelf(nums: number[]): number[] {
	const cumulativeProduct = [1];
	const cumulativeProductReverse = [1];
	const array = [];

	for (let i = 1; i <= nums.length; i++) {
		cumulativeProduct[i] = cumulativeProduct[i - 1] * nums[i - 1];
		cumulativeProductReverse[i] =
			cumulativeProductReverse[i - 1] * nums[nums.length - i];
	}

	for (let i = 0; i < nums.length; i++) {
		array[i] =
			cumulativeProduct[i] *
			cumulativeProductReverse[nums.length - i - 1];
	}

	return array;
}
// time complexity O(n)
// space complexity O(n)

export default productExceptSelf;

function findPeakElement(nums: number[]): number {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		const middle = Math.floor((left + right) / 2);

		const previous = nums[middle - 1] ?? -Infinity;
		const next = nums[middle + 1] ?? -Infinity;

		if (nums[middle] > previous && nums[middle] > next) {
			return middle;
		}

		if (nums[middle] < previous) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}

	return left;
}

function merge(nums: number[], from: number, mid: number, end: number) {
	const result = [];

	let i = from,
		j = mid + 1,
		k = 0;
	while (i <= mid || j <= end) {
		if (i > mid || (j <= end && nums[i] > nums[j])) {
			result[k++] = nums[j++];
		} else {
			result[k++] = nums[i++];
		}
	}

	let count = 0;
	result.forEach(el => {
		nums[from + count++] = el;
	});
}

function sortArray(nums: number[]): number[] {
	let interval = 1;

	while (interval < nums.length) {
		for (let i = 0; i < nums.length - interval; i += interval * 2) {
			// say that interval  = 2
			// i = 0
			// mid = 1
			// end = 3
			const mid = i + interval - 1;
			const end = Math.min(i + 2 * interval - 1, nums.length - 1);
			merge(nums, i, mid, end);
		}
		interval *= 2;
	}

	return nums;
}

export default sortArray;

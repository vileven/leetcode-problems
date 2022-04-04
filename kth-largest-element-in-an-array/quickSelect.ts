function swap(nums: number[], i1: number, i2: number) {
	const temp = nums[i1];
	nums[i1] = nums[i2];
	nums[i2] = temp;
}

function partition(
	nums: number[],
	left: number,
	right: number,
	pivotIndex: number,
): number {
	const pivot = nums[pivotIndex];

	// move pivot to end
	swap(nums, pivotIndex, right);
	let storeIndex = left;

	// move all smaller element to left
	for (let i = left; i <= right; i++) {
		if (nums[i] < pivot) {
			swap(nums, storeIndex, i);
			storeIndex++;
		}
	}

	// move pivot to its final place
	swap(nums, storeIndex, right);

	return storeIndex;
}

/*
 * Returns the k-th smallest element of list within left..right.
 */
function quickSelect(
	nums: number[],
	left: number,
	right: number,
	kSmallest: number,
) {
	// If the list contains only one element,
	// return that element
	if (left === right) {
		return nums[left];
	}

	let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
	pivotIndex = partition(nums, left, right, pivotIndex);

	// the pivot is on (N - k)th smallest position
	if (kSmallest === pivotIndex) {
		return nums[kSmallest];
	}

	// go to the left
	if (kSmallest < pivotIndex) {
		return quickSelect(nums, left, pivotIndex - 1, kSmallest);
	}

	// go to the right
	return quickSelect(nums, pivotIndex + 1, right, kSmallest);
}

function findKthLargest(nums: number[], k: number): number {
	return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

export default findKthLargest;

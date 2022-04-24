function quickSort(array: number[], from: number, to: number) {
	if (from < to) {
		const pivotIndex = partition2(array, from, to);
		quickSort(array, from, pivotIndex);
		quickSort(array, pivotIndex + 1, to);
	}

	return array;
}

/**
 * it is Hoare partition scheme (a bit better than Lomuto)
 *
 * example of working
 * 4,5,6,7,2,10 - pivot is 7
 *
 * iter1
 * while left less then 7 go (until 7 itself) left = 3
 * while right greater than 7 go (until 2) right = 4
 * swap 7 and 2
 * 4,5,6,2,7,10
 *
 * iter2
 * while left less then 7 go (until 7 itself) left = 4
 * while right greater than 7 go (actually doesn't go inside the loop, cause 7 not greater itself) right = 4
 * break cause right === left
 *
 * return right which is 4 as pivotIndex
 */
function partition2(array: number[], left: number, right: number) {
	const pivotIndex = Math.floor((right + left) / 2);
	const pivot = array[pivotIndex];

	while (left <= right) {
		while (array[left] < pivot) {
			left++;
		}

		while (array[right] > pivot) {
			right--;
		}

		if (left < right) {
			[array[left], array[right]] = [array[right], array[left]];
			left++;
			right--;
		} else {
			break;
		}
	}

	return right;
}

// it is Lomuto partition scheme
//
// example of working
// 4,5,6,7,2,10 - random — 4
// 10,5,6,7,2,4 - move pivot to end
// iter1 — 10 less than 4 ? no
// iter2 — 5 less than 4 ? no
// iter3 — 6 less than 4 ? no
// iter4 — 7 less than 4 ? no
// iter5 — 2 less than 4 ? yes, swap to storeIndex value and inc it
// 2,5,6,7,10,4
// swap pivot to storeindex
// 2,4,6,7,10,5
function partition(array: number[], left: number, right: number): number {
	// randomly choose index of element beetween left and right
	let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));

	const pivot = array[pivotIndex];

	// move this element to end of array
	[array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];

	let storeIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivot) {
			[array[i], array[storeIndex]] = [array[storeIndex], array[i]];
			storeIndex++;
		}
	}

	[array[storeIndex], array[right]] = [array[right], array[storeIndex]];

	return storeIndex;
}

// time O(N^2), average NlogN
// space O(N)
function sortArray(nums: number[]): number[] {
	return quickSort(nums, 0, nums.length - 1);
}

export default sortArray;

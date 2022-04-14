/**
 Do not return anything, modify nums1 in-place instead.
 */

// time Complexity — O(m)
// space — O(1)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let pointer1 = m - 1;
	let pointer2 = n - 1;

	for (let i = m + n - 1; i >= 0; i--) {
		if (pointer2 < 0) {
			break;
		}

		if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
			nums1[i] = nums1[pointer1--];
		} else {
			nums1[i] = nums2[pointer2--];
		}
	}
}

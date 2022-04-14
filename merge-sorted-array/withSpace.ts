/**
 Do not return anything, modify nums1 in-place instead.
 */

// time Complexity — O(m)
// space — O(m)
export function merge(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number,
): void {
	let pointer1 = 0;
	let pointer2 = 0;

	let i = 0;

	const num1Copy = [...nums1];

	while (i < n + m) {
		let currentEl;

		switch (true) {
			case pointer1 === m:
			case num1Copy[pointer1] >= nums2[pointer2]:
				currentEl = nums2[pointer2++];
				break;
			case pointer2 === n:
			case num1Copy[pointer1] < nums2[pointer2]:
				currentEl = num1Copy[pointer1++];
				break;
		}

		nums1[i++] = currentEl;
	}
}

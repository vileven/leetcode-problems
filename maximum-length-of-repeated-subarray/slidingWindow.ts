function findLength(nums1: number[], nums2: number[]): number {
	let result = 0;

	for (let i = 0; i < nums1.length + nums2.length - 1; i++) {
		// The current overlapping window is A[aStart, Math.min(A.length, B.length)] and B[bStart, Math.min(A.length, B.length)].
		const aStart = Math.max(0, nums1.length - 1 - i);
		const bStart = Math.max(0, i - (nums2.length - 1));
		let numConsecutiveMatches = 0;
		for (
			let aIdx = aStart, bIdx = bStart;
			aIdx < nums1.length && bIdx < nums2.length;
			++aIdx, ++bIdx
		) {
			// Maintain number of equal consecutive elements in the current window (overlap) and the max number ever computed.
			numConsecutiveMatches =
				nums1[aIdx] == nums2[bIdx] ? numConsecutiveMatches + 1 : 0;
			result = Math.max(result, numConsecutiveMatches);
		}
	}
	return result;
}

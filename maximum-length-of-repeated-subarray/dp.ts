function findLength(nums1: number[], nums2: number[]): number {
	const dp = Array.from({length: nums1.length + 1}, () => []);

	let max = 0;

	for (let i = nums1.length - 1; i >= 0; i--) {
		for (let j = nums2.length - 1; j >= 0; j--) {
			if (nums1[i] === nums2[j]) {
				dp[i][j] = (dp[i + 1][j + 1] ?? 0) + 1;
				if (max < dp[i][j]) {
					max = dp[i][j];
				}
			}
		}
	}

	return max;
}

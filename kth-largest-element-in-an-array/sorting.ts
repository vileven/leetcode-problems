function findKthLargest(nums: number[], k: number): number {
	return nums.sort((a, b) => (a < b ? -1 : 1))[nums.length - k];
}

export default findKthLargest;

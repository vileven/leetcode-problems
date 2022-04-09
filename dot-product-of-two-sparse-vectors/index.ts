class SparseVector {
	nonZeroMap: Map<number, number>;
	length: number;

	constructor(nums: number[]) {
		this.length = nums.length;
		this.nonZeroMap = new Map();

		nums.forEach((num, index) => {
			if (num !== 0) {
				this.nonZeroMap.set(index, num);
			}
		});
	}

	// Return the dotProduct of two sparse vectors
	dotProduct(vec: SparseVector): number {
		let result = 0;

		this.nonZeroMap.forEach((num, index) => {
			if (vec.nonZeroMap.has(index)) {
				result += num * vec.nonZeroMap.get(index);
			}
		});

		return result;
	}
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */

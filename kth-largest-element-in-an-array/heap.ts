export class Heap {
	data = [];

	size(): number {
		return this.data.length;
	}

	swap(i1: number, i2: number) {
		const temp = this.data[i1];
		this.data[i1] = this.data[i2];
		this.data[i2] = temp;
	}

	/**
	 * back ordering tree from i index
	 */
	heapify(i: number) {
		const left = i * 2 + 1;
		const right = i * 2 + 2;

		const heapSize = this.data.length;

		let min = i;

		if (left < heapSize && this.data[left] < this.data[min]) {
			min = left;
		}

		if (right < heapSize && this.data[right] < this.data[min]) {
			min = right;
		}

		if (min !== i) {
			this.swap(i, min);
			this.heapify(min);
		}
	}

	/**
	 * add to end of binary tree
	 * and then buble while order will be ok
	 */
	add(element: number) {
		const newLastIndex = this.data.length;
		this.data[newLastIndex] = element;

		/**
		 * while parent is greater then swap
		 */
		let index = newLastIndex;
		let parentIndex = Math.floor((index - 1) / 2);
		while (index > 0 && this.data[parentIndex] > this.data[index]) {
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	pop(): number {
		if (this.data.length < 1) {
			return null;
		}

		const max = this.data[0];
		this.data[0] = this.data[this.data.length - 1];
		this.data.length--;
		this.heapify(0);

		return max;
	}
}

function findKthLargest(nums: number[], k: number): number {
	const heap = new Heap();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];

		if (num === 8221) {
			debugger;
		}

		heap.add(num);

		if (heap.size() > k) {
			heap.pop();
		}
	}

	return heap.pop();
}

export default findKthLargest;

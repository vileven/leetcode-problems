type CompareFun<T> = (a: T, b: T) => -1 | 0 | 1;

class Heap<T> {
	data: T[] = [];
	private readonly compare: CompareFun<T>;

	private less(a, b): boolean {
		return this.compare(this.data[a], this.data[b]) < 0;
	}

	private greater(a, b): boolean {
		return this.compare(this.data[a], this.data[b]) > 0;
	}

	constructor(compareFun: CompareFun<T>) {
		this.compare = compareFun;
	}

	size(): number {
		return this.data.length;
	}

	add(el: T) {
		const newLastIndex = this.size();

		this.data[newLastIndex] = el;

		let parentIndex = Math.floor((newLastIndex - 1) / 2);
		let currentIndex = newLastIndex;
		while (parentIndex >= 0 && this.greater(parentIndex, currentIndex)) {
			[this.data[parentIndex], this.data[currentIndex]] = [
				this.data[currentIndex],
				this.data[parentIndex],
			];

			currentIndex = parentIndex;
			parentIndex = Math.floor((currentIndex - 1) / 2);
		}
	}

	peek(): T {
		return this.data[0];
	}

	pop(): T {
		const result = this.peek();

		const lastIndex = this.size() - 1;
		[this.data[0], this.data[lastIndex]] = [
			this.data[lastIndex],
			this.data[0],
		];
		this.data.length--;

		this.heapify(0);

		return result;
	}

	heapify(index: number): void {
		const left = 2 * index + 1;
		const right = 2 * index + 2;

		let min = index;

		const size = this.size();

		if (left < size && this.less(left, min)) {
			min = left;
		}

		if (right < size && this.less(right, min)) {
			min = right;
		}

		if (min !== index) {
			[this.data[min], this.data[index]] = [
				this.data[index],
				this.data[min],
			];

			this.heapify(min);
		}
	}
}

// time O(N log k)
// space O(N + k)
function topKFrequent(nums: number[], k: number): number[] {
	const freqHash = new Map<number, number>();

	nums.forEach((num) => {
		if (!freqHash.has(num)) {
			freqHash.set(num, 1);
			return;
		}

		freqHash.set(num, freqHash.get(num) + 1);
	});

	if (freqHash.size === 1) {
		return [nums[0]];
	}

	// we are creating that on top should be less freq values
	const compareFun: CompareFun<number> = (a, b) => {
		if (freqHash.get(a) < freqHash.get(b)) {
			return -1;
		}

		return 1;
	};
	const heap = new Heap<number>(compareFun);

	for (const num of freqHash.keys()) {
		heap.add(num);

		if (heap.size() > k) {
			heap.pop();
		}
	}

	return heap.data;
}

export default topKFrequent;

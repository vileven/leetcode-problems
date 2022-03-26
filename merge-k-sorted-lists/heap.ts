import {ListNode} from './';

class Heap {
	data: Array<ListNode> = [];

	heapify(i: number) {
		const left = 2 * i + 1;
		const right = 2 * i + 2;

		const heapSize = this.data.length;

		let min = i;
		if (left < heapSize && this.data[left].val < this.data[min].val) {
			min = left;
		}

		if (right < heapSize && this.data[right].val < this.data[min].val) {
			min = right;
		}

		if (min !== i) {
			const temp = this.data[i];
			this.data[i] = this.data[min];
			this.data[min] = temp;
			this.heapify(min);
		}
	}

	add(el) {
		const newLastIndex = this.data.length;
		this.data.push(el);

		let index = newLastIndex;
		while (
			index > 0 &&
			this.data[Math.floor((index - 1) / 2)].val > this.data[index].val
		) {
			const parentIndex = Math.floor((index - 1) / 2);
			const temp = this.data[parentIndex];
			this.data[parentIndex] = this.data[index];
			this.data[index] = temp;

			index = parentIndex;
		}
	}

	pop(): ListNode {
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

function mergeKLists(lists: Array<ListNode | null>): any {
	const heap = new Heap();

	lists.forEach((list) => {
		while (list != null) {
			// add to heap O(log)
			heap.add(list);
			list = list.next;
		}
	});

	let res = null;
	let current = null;
	while (heap.data.length >= 1) {
		const newCurrent = heap.pop();
		if (newCurrent === null) {
			return res;
		}

		if (!res) {
			res = newCurrent;
		}

		newCurrent.next = null;
		if (current) {
			current.next = newCurrent;
		}
		current = newCurrent;
	}

	return res;
}

export default mergeKLists;

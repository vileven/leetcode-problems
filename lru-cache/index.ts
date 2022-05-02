export interface MyNode {
	key: number;
	val: number;
	next: MyNode | null;
	prev: MyNode | null;
}

export default class LRUCache {
	private capacity: number;
	public cache: {[key: number]: MyNode};
	public first: MyNode;
	public last: MyNode;

	private length: number;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.cache = {};
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	get(key: number): number {
		if (!(key in this.cache)) {
			return -1;
		}

		this.moveNodeToFirst(this.cache[key]);

		return this.cache[key].val;
	}

	addNode(node: MyNode) {
		if (this.first !== null) {
			this.first.prev = node;

			// have only 1 node in list — should update last
			if (this.first === this.last) {
				this.last = this.first;
			}
		}

		// add to first pos
		node.next = this.first;
		node.prev = null;

		// update first
		this.first = node;

		// if it's first node in list
		if (this.last === null) {
			this.last = node;
		}
	}

	removeNode(node: MyNode) {
		const {prev, next} = node;

		if (prev !== null) {
			prev.next = next;
		} else {
			// node is first, should update first
			this.first = next;
		}

		if (next !== null) {
			next.prev = prev;
		} else {
			// node is last, should update last
			this.last = prev;
		}
	}

	moveNodeToFirst(node: MyNode) {
		this.removeNode(node);
		this.addNode(node);
	}

	put(key: number, val: number): void {
		if (key in this.cache) {
			this.cache[key].val = val;
			this.moveNodeToFirst(this.cache[key]);
			return;
		}

		const node: MyNode = {key, val, next: null, prev: null};

		if (this.capacity === this.length) {
			delete this.cache[this.last.key];
			this.removeNode(this.last);
			this.length--;
		}

		this.addNode(node);

		this.cache[key] = node;
		this.length++;
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 *
 *
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import {TreeNode} from '../binary-tree-vertical-order-traversal';

type Comparator<T> = (a: T, b: T) => number;

class Heap<T = number> {
	private data: T[] = [];

	private compare: Comparator<T>;

	less = (a: number, b: number) =>
		this.compare(this.data[a], this.data[b]) < 0;
	more = (a: number, b: number) =>
		this.compare(this.data[a], this.data[b]) > 0;

	constructor(comparator: Comparator<T>) {
		this.compare = comparator;
	}

	size(): number {
		return this.data.length;
	}

	add(node: T) {
		const lastIndex = this.data.length;

		this.data[lastIndex] = node;

		/**
		 * while parent is greater then swap
		 */
		let index = lastIndex;
		let parentIndex = Math.floor((index - 1) / 2);
		while (index > 0 && this.more(parentIndex, index)) {
			[this.data[index], this.data[parentIndex]] = [
				this.data[parentIndex],
				this.data[index],
			];
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	heapify(index: number) {
		const left = index * 2 + 1;
		const right = index * 2 + 2;

		let min = index;

		if (left < this.data.length && this.less(left, min)) {
			min = left;
		}

		if (right < this.data.length && this.less(right, min)) {
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

	pop(): T {
		const result = this.data[0];
		const lastIndex = this.data.length - 1;

		[this.data[0], this.data[lastIndex]] = [
			this.data[lastIndex],
			this.data[0],
		];
		this.data.length--;

		this.heapify(0);

		return result;
	}
}

interface NodeInfo {
	node: TreeNode | null;
	column: number;
	row: number;
}

function compareNodes(a: NodeInfo, b: NodeInfo) {
	return a.row < b.row || (a.row === b.row && a.node.val < b.node.val)
		? -1
		: 1;
}

/**
 * time O(NlogN)
 * space O(N)
 */
function verticalTraversal(root: TreeNode | null): number[][] {
	if (root === null) {
		return [];
	}

	const queue: NodeInfo[] = [{node: root, column: 0, row: 0}];

	const hash: Map<number, Heap<NodeInfo>> = new Map();

	let lessColumn = Infinity;

	while (queue.length) {
		const size = queue.length;

		for (let i = 0; i < size; i++) {
			const nodeInfo = queue.shift();
			const {node, column, row} = nodeInfo;

			if (node === null) {
				continue;
			}

			if (column < lessColumn) {
				lessColumn = column;
			}

			if (!hash.has(column)) {
				hash.set(column, new Heap(compareNodes));
			}

			const heap = hash.get(column);
			heap.add(nodeInfo);

			queue.push({node: node.left, column: column - 1, row: row + 1});
			queue.push({node: node.right, column: column + 1, row: row + 1});
		}
	}

	const result: number[][] = [];
	for (let i = 0, j = lessColumn; i < hash.size; i++, j++) {
		const heap = hash.get(j);

		result[i] = [];

		while (heap.size()) {
			result[i].push(heap.pop().node.val);
		}
	}

	return result;
}

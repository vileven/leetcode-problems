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

	const hash: Map<number, NodeInfo[]> = new Map();

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
				hash.set(column, []);
			}

			const arr = hash.get(column);
			arr.push(nodeInfo);

			queue.push({node: node.left, column: column - 1, row: row + 1});
			queue.push({node: node.right, column: column + 1, row: row + 1});
		}
	}

	const result: number[][] = [];
	for (let i = 0, j = lessColumn; i < hash.size; i++, j++) {
		const columnArr = hash.get(j);

		result[i] = columnArr.sort(compareNodes).map((el) => el.node.val);
	}

	return result;
}

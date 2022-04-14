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

import {TreeNode} from '../lowest-common-ancestor-of-a-binary-tree';

// time O(N)
// space O(N) O(D) — D - diameter for tree
function rightSideView(root: TreeNode | null): number[] {
	if (root === null) {
		return [];
	}
	const result = [];

	const queue = [root];

	while (queue.length) {
		const size = queue.length;

		// level cycle
		for (let i = 0; i < size; i++) {
			const node = queue.shift();

			if (i === size - 1) {
				result.push(node.val);
			}

			if (node.left !== null) {
				queue.push(node.left);
			}

			if (node.right !== null) {
				queue.push(node.right);
			}
		}
	}

	return result;
}

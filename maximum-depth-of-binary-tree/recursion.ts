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

/**
 * time  O(n)
 * space O(n)
 */
export function maxDepth(node: TreeNode | null, acc: number = 0): number {
	if (node === null) {
		return acc;
	}

	return Math.max(
		maxDepth(node.left, acc + 1),
		maxDepth(node.right, acc + 1),
	);
}

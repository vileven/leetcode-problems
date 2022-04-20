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

// O(n) both
function searchBST(node: TreeNode | null, val: number): TreeNode | null {
	if (node === null || node.val === val) {
		return node;
	}

	if (val < node.val) {
		return searchBST(node.left, val);
	}

	if (val > node.val) {
		return searchBST(node.right, val);
	}
}

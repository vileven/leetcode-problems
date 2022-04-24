import {TreeNode} from '../binary-tree-vertical-order-traversal';

// O(n) time & space
function isValidBST(
	node: TreeNode | null,
	low: TreeNode | null = null,
	high: TreeNode | null = null,
): boolean {
	if (node === null) {
		return true;
	}

	let leftTreeValid =
		(node.left ? node.left.val < node.val : true) &&
		(low ? low.val < node.val : true) &&
		isValidBST(node.left, low, node);
	let rightTreeValid =
		(node.right ? node.right.val > node.val : true) &&
		(high ? high.val > node.val : true) &&
		isValidBST(node.right, node, high);

	return leftTreeValid && rightTreeValid;
}

export default isValidBST;

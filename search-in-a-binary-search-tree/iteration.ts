import {TreeNode} from '../binary-tree-vertical-order-traversal';

// time - O(n)
// space O(1)
function searchBST(node: TreeNode | null, val: number): TreeNode | null {
	while (node !== null && node?.val !== val) {
		if (val < node.val) {
			node = node.left;
		} else {
			node = node.right;
		}
	}

	return node;
}

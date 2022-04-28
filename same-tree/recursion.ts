import {TreeNode} from '../binary-tree-vertical-order-traversal';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) {
		return true;
	}

	if (!q || !p) {
		return false;
	}

	if (q.val !== p.val) {
		return false;
	}

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

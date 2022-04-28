import {TreeNode} from '../binary-tree-vertical-order-traversal';

function inorderTraversal(root: TreeNode | null, acc: number[] = []): number[] {
	if (root === null) {
		return acc;
	}

	inorderTraversal(root.left, acc);

	acc.push(root.val);

	inorderTraversal(root.right, acc);

	return acc;
}

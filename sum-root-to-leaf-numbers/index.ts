import {TreeNode} from '../binary-tree-vertical-order-traversal';

function dfs(node: TreeNode | null, curNumber: number, acc: {sum: number}) {
	if (node === null) {
		return;
	}

	curNumber = curNumber * 10 + node.val;

	// it is a leaf!
	if (!node.left && !node.right) {
		acc.sum += curNumber;
		return;
	}

	dfs(node.left, curNumber, acc);
	dfs(node.right, curNumber, acc);
}

function sumNumbers(root: TreeNode | null): number {
	const acc = {sum: 0};
	dfs(root, 0, acc);

	return acc.sum;
}

import {TreeNode} from '../binary-tree-vertical-order-traversal';

function dfs(node: TreeNode | null, path: string, acc: number[]) {
	if (node === null) {
		return;
	}

	path += node.val.toString();

	// it is a leaf!
	if (!node.left && !node.right) {
		acc.push(Number(path));
		return;
	}

	dfs(node.left, path, acc);
	dfs(node.right, path, acc);
}

function sumNumbers(root: TreeNode | null): number {
	const sum = [];

	dfs(root, '', sum);

	return sum.reduce((sum, el) => sum + el, 0);
}

import {TreeNode} from '../binary-tree-vertical-order-traversal';

function dfs(node: TreeNode | null, result: {diameter: number}): number {
	if (node === null) {
		return 0;
	}

	const longestLeft = dfs(node.left, result);
	const longestRight = dfs(node.right, result);

	result.diameter = Math.max(longestLeft + longestRight, result.diameter);

	return Math.max(longestLeft, longestRight) + 1;
}

// time —  O(N)
// space — O(N)
function diameterOfBinaryTree(root: TreeNode | null): number {
	if (root === null) {
		return 0;
	}
	const result = {diameter: 0};
	dfs(root, result);

	return result.diameter;
}

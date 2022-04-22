import {TreeNode} from '../binary-tree-vertical-order-traversal';

/**
 * time O(n)
 * space O(N)
 */
function maxDepth(root: TreeNode | null): number {
	let maxDepth = 0;

	const stack: Array<[TreeNode | null, number]> = [[root, 0]];

	while (stack.length) {
		const [node, depth] = stack.pop();

		if (node === null) {
			continue;
		}

		if (depth > maxDepth) {
			maxDepth = depth;
		}

		stack.push([node.left, depth + 1]);
		stack.push([node.right, depth + 1]);
	}

	return maxDepth;
}

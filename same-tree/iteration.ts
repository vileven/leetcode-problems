import {TreeNode} from '../binary-tree-vertical-order-traversal';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	const stack = [[p, q]];

	while (stack.length) {
		const [p, q] = stack.pop();

		if (!p && !q) {
			continue;
		}

		if (!q || !p) {
			return false;
		}

		if (q.val !== p.val) {
			return false;
		}

		stack.push([p.left, q.left]);
		stack.push([p.right, q.right]);
	}

	return true;
}

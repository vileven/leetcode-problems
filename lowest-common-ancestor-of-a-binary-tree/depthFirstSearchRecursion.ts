import {TreeNode} from './index';

function traverseTree(
	node: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
	options: {firstFound: TreeNode | null} = {firstFound: null},
): TreeNode | null {
	if (node === null) {
		return;
	}

	const {firstFound} = options;

	if (node.val === p.val) {
		if (!firstFound) {
			options.firstFound = p;
		}
		return p;
	}

	if (node.val === q.val) {
		if (!firstFound) {
			options.firstFound = q;
		}
		return q;
	}

	const leftLeaf = traverseTree(node.left, p, q, options);
	const rightLeaf = traverseTree(node.right, p, q, options);

	if (leftLeaf && rightLeaf && !firstFound) {
		return node;
	}

	if (leftLeaf) {
		return leftLeaf;
	}

	if (rightLeaf) {
		return rightLeaf;
	}

	return null;
}

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null {
	return traverseTree(root, p, q);
}

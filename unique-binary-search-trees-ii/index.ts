import {TreeNode} from '../lowest-common-ancestor-of-a-binary-tree';

function generateRangeTrees(
	from: number,
	to: number,
	memo: any,
): Array<TreeNode | null> {
	if (from > to) {
		return [null];
	}

	const key = `${from}-${to}`;
	if (memo[key]) {
		return memo[key];
	}

	const result = [];
	for (let i = from; i <= to; i++) {
		const leftTrees = generateRangeTrees(from, i - 1, memo);
		const rightTrees = generateRangeTrees(i + 1, to, memo);

		for (const leftTree of leftTrees) {
			for (const rightTree of rightTrees) {
				const node = new TreeNode(i);
				node.left = leftTree;
				node.right = rightTree;
				result.push(node);
			}
		}
	}

	memo[key] = result;

	return result;
}

function generateTrees(n: number): Array<TreeNode | null> {
	return generateRangeTrees(1, n, {});
}

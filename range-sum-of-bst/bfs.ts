import {TreeNode} from '../lowest-common-ancestor-of-a-binary-tree';

// time O(n)
// space O(n)
export function rangeSumBST(
	root: TreeNode | null,
	low: number,
	high: number,
): number {
	let result = 0;
	const queue = [root];

	while (queue.length) {
		const size = queue.length;

		for (let i = 0; i < size; i++) {
			const node = queue.shift();

			if (node === null) {
				continue;
			}

			if (node.val > high) {
				queue.push(node.left);
				continue;
			}

			if (node.val < low) {
				queue.push(node.right);
				continue;
			}

			result += node.val;
			queue.push(node.left);
			queue.push(node.right);
		}
	}

	return result;
}

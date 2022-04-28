import {TreeNode} from '../binary-tree-vertical-order-traversal';

function levelOrder(root: TreeNode | null): number[][] {
	let queue = [root];
	const result: number[][] = [];

	while (queue.length) {
		const levelArray = [];
		const newQueue = [];
		for (let i = 0; i < queue.length; i++) {
			const node = queue[i];

			if (node === null) {
				continue;
			}

			levelArray.push(node.val);

			newQueue.push(node.left);
			newQueue.push(node.right);
		}

		queue = newQueue;
		if (levelArray.length) {
			result.push(levelArray);
		}
	}

	return result;
}

import {TreeNode} from './index';

interface QueueValue {
	node: TreeNode;
	level: number;
}

/**
 * time O(N)
 * space O(N)
 */
function verticalOrder(root: TreeNode | null): number[][] {
	const hash = new Map<number, number[]>();
	const minMax = {min: 0, max: 0};

	const queue: QueueValue[] = [{node: root, level: 0}];

	while (queue.length) {
		for (let i = 0; i < queue.length; i++) {
			const {node, level} = queue.shift();

			if (node === null) {
				continue;
			}

			if (!hash.has(level)) {
				hash.set(level, []);
			}

			if (level < minMax.min) {
				minMax.min = level;
			}

			if (level > minMax.max) {
				minMax.max = level;
			}

			const levelArray = hash.get(level);
			levelArray.push(node.val);

			queue.push({node: node.left, level: level - 1});
			queue.push({node: node.right, level: level + 1});
		}
	}

	let result = [];
	for (let i = minMax.min, j = 0; i <= minMax.max && hash.size; i++, j++) {
		result[j] = hash.get(i);
	}

	return result;
}

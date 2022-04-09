interface NestedInteger {
	isInteger(): boolean;
	getInteger(): number | null;
	getList(): NestedInteger[];
}

/**
 * time O(N)
 * space O(N)
 */
function depthSum(nestedList: NestedInteger[]): number {
	const queue = nestedList;

	let depth = 1;
	let total = 0;

	while (queue.length) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const nested = queue.shift();
			if (nested.isInteger()) {
				total += nested.getInteger() * depth;
			} else {
				queue.push(...nested.getList());
			}
		}
		depth++;
	}
	return total;
}

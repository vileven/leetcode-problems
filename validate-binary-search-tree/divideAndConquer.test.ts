import isValidBST from './divideAndConquer';
import {TreeNode} from '../binary-tree-vertical-order-traversal';

describe('validate-binary-search-tree divideAndConquer.ts', () => {
	it('should work', () => {
		expect(
			isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))),
		).toBe(true);
	});
});

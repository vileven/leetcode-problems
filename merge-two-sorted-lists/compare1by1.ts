import {ListNode} from './index';

// time O(N + M)
// space O(1)
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	let result = null;
	let currentNode = null;
	while (list1 !== null || list2 !== null) {
		let nextCurrentNode =
			list1 !== null && list2 !== null && list1.val < list2.val
				? list1
				: list2 || list1;

		if (nextCurrentNode === null) {
			return result;
		}

		if (nextCurrentNode === list1) {
			list1 = list1.next;
		} else {
			list2 = list2.next;
		}

		if (!result) {
			result = nextCurrentNode;
		}

		if (currentNode) {
			currentNode.next = nextCurrentNode;
		}
		nextCurrentNode.next = null;

		currentNode = nextCurrentNode;
	}

	return result;
}

export default mergeTwoLists;

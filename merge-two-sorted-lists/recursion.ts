import {ListNode} from './index';

// O(N + M) both
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	if (list1 === null && list2 === null) {
		return null;
	}

	let currentHead;
	let anotherOne;

	switch (true) {
		case list1 === null:
			currentHead = list2;
			break;
		case list2 === null:
			currentHead = list1;
			break;
		case list1.val <= list2.val:
			currentHead = list1;
			break;
		case list1.val > list2.val:
			currentHead = list2;
	}

	anotherOne = currentHead === list1 ? list2 : list1;
	const nextFromHead = currentHead.next;
	currentHead.next = mergeTwoLists(nextFromHead, anotherOne);

	return currentHead;
}

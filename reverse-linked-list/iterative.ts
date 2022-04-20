import {ListNode} from '../merge-k-sorted-lists';

function reverseList(head: ListNode | null): ListNode | null {
	let prev = null;
	let cur = head;

	while (cur !== null) {
		const nextTemp = cur.next;
		cur.next = prev;

		prev = cur;
		cur = nextTemp;
	}

	return prev;
}

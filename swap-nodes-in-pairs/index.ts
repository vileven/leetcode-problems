/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import {ListNode} from '../merge-k-sorted-lists';

// node -> next -> next.next before
// next -> node -> next.next after
function swap(node: ListNode | null) {
	if (node === null || node.next === null) {
		return node;
	}

	const {next} = node;

	node.next = swap(next.next);
	next.next = node;

	return next;
}

function swapPairs(head: ListNode | null): ListNode | null {
	return swap(head);
}

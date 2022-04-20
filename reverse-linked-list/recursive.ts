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

/**
 * n_1 -> n_2 -> ...  n_k-1 -> n_k -> n_k+1 -> ... -> null
 * on every recursive iteration we need:
 * 1. get and return node from recursion
 * 2. set n_k+1.next to n_k
 */
function reverseList(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) {
		return head;
	}

	const node = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return node;
}

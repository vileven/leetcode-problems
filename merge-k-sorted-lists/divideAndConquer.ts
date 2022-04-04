import {ListNode} from '.';
import mergeTwoLists from '../merge-two-sorted-lists/compare1by1';

// time O(N*log(k))
// space O(1)
function mergeKLists(lists: Array<ListNode | null>): any {
	let interval = 1;

	if (!lists.length) {
		return null;
	}

	while (interval < lists.length) {
		for (let i = 0; i < lists.length - interval; i += interval * 2) {
			lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
		}
		interval *= 2;
	}

	return lists[0];
}

export default mergeKLists;

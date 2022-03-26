import {ListNode} from '.';
import mergeTwoLists from '../merge-two-sorted-lists/compare1by1';

// time O(N*log(k))
// space O(1)
function mergeKLists(lists: Array<ListNode | null>): any {
	for (let N = lists.length; N > 1; N = Math.ceil(N / 2)) {
		// iterate each 2
		let listsIndex = 0;
		for (let i = 0; i < N; i += 2) {
			if (!lists[i + 1]) {
				lists[listsIndex++] = lists[i];
				continue;
			}

			if (!lists[i]) {
				lists[listsIndex++] = lists[i + 1];
				continue;
			}

			lists[listsIndex++] = mergeTwoLists(lists[i], lists[i + 1]);
		}
	}

	return lists[0] || null;
}

export default mergeKLists;

import {ListNode} from '.';
import mergeTwoLists from '../merge-two-sorted-lists/compare1by1';

// time O(N*log(k))
// space O(1)
function mergeKLists(lists: Array<ListNode | null>): any {
	let N = lists.length;

	while (N !== 1) {
		// iterate each 2
		let listsIndex = 0;
		for (let i = 0; i < N; i += 2) {
			if (!lists[i + 1]) {
				lists[listsIndex++] = lists[i];
				continue;
			}

			lists[listsIndex++] = mergeTwoLists(lists[i], lists[i + 1]);
		}

		N = Math.ceil(N / 2);
	}

	return lists[0];
}

export default mergeKLists;

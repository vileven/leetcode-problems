import {ListNode} from '.';

function mergeKLists(lists: Array<ListNode | null>): any {
	let res_prev = null;
	let res_first = res_prev;

	while (true) {
		let curI = 0;
		let curMin = lists[0];
		let nullCount = curMin === null ? 1 : 0;

		// find cur min
		for (let i = 1; i < lists.length; i++) {
			if (lists[i] === null) {
				nullCount++;
			}
			if (
				(curMin !== null &&
					lists[i] !== null &&
					lists[i].val < curMin.val) ||
				curMin === null
			) {
				curMin = lists[i];
				curI = i;
			}
		}

		if (nullCount === lists.length) {
			return res_first;
		}

		const curValue = {val: curMin.val, next: null};
		if (res_prev) {
			res_prev.next = curValue;
		}

		if (!res_prev) {
			res_first = curValue;
		}

		res_prev = curValue;
		lists[curI] = lists[curI].next;
	}
}

export default mergeKLists;

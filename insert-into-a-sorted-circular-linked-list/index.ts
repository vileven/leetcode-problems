class MyNode {
	val: number;
	next: MyNode | null;
	constructor(val?: number, next?: MyNode) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function insert(head: MyNode | null, insertVal: number): MyNode | null {
	// edge case: head === null
	if (head === null) {
		const node = new MyNode(insertVal);
		node.next = node;
		return node;
	}

	let prevP = null,
		prevMinimum = null;
	let p = head,
		minimum = head;

	// find minimal element
	do {
		if (p.val < minimum.val) {
			minimum = p;
			prevMinimum = prevP;
		}

		prevP = p;
		p = p.next;
	} while (p !== head);

	if (prevMinimum === null) {
		prevMinimum = prevP;
	}

	prevP = prevMinimum;
	p = minimum;

	// insert element
	do {
		// before prevVal.next -> p
		// after prevVal.next -> newNode, newNode.next -> p
		if (insertVal <= p.val) {
			const newNode = new MyNode(insertVal, p);
			prevP.next = newNode;

			return head;
		}

		prevP = p;
		p = p.next;
	} while (p !== minimum);

	// edge case: we got maximum element as insertValue, or we have single element list
	// Consequently, we need to place element after prevMinimum
	const node = new MyNode(insertVal, minimum);
	prevMinimum.next = node;

	return head;
}

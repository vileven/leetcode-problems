class Node {
	val: number;
	next: Node | null;
	random: Node | null;
	constructor(val?: number, next?: Node, random?: Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

function copyRandomList(head: Node | null): Node | null {
	let originalPointer = head;
	let newFirst = null,
		newPointer: Node = null;

	const mapRandom = new Map<Node, Node[]>();
	const mapLists = new Map<Node, Node>();

	while (originalPointer !== null) {
		const newNode = {...originalPointer, next: null, random: null};

		mapLists.set(originalPointer, newNode);

		if (!newFirst) {
			newFirst = newNode;
		}

		if (newPointer) {
			newPointer.next = newNode;
		}

		newPointer = newNode;
		originalPointer = originalPointer.next;
	}

	originalPointer = head;
	newPointer = newFirst;
	while (originalPointer !== null) {
		newPointer.random = mapLists.get(originalPointer.random);

		originalPointer = originalPointer.next;
		newPointer = newPointer.next;
	}

	return newFirst;
}

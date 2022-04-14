export class Node {
	val: number;
	left: Node | null;
	right: Node | null;
	constructor(val?: number, left?: Node | null, right?: Node | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function addToList(node: Node, list: {head: Node}) {
	const {head} = list;

	head.right = node;
}

function dfs(node: Node, list: {head: Node; tail: Node}) {
	if (node === null) {
		return;
	}

	dfs(node.left, list);

	if (list.tail) {
		list.tail.right = node;
		node.left = list.tail;
	} else {
		list.head = node;
	}
	list.tail = node;

	dfs(node.right, list);
}

function treeToDoublyList(root: Node | null): Node | null {
	if (root === null) {
		return null;
	}

	const list = {head: null, tail: null};
	dfs(root, list);

	list.head.left = list.tail;
	list.tail.right = list.head;
	return list.head;
}

import {Node} from './';

function findLCA(node: Node | null, visited: Set<Node>) {
	if (node === null) {
		return node;
	}

	if (visited.has(node)) {
		return node;
	}

	visited.add(node);
	return findLCA(node.parent, visited);
}

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
	if (p.parent === q.parent) {
		return p.parent;
	}

	const visited = new Set<Node>();
	findLCA(p, visited);

	return findLCA(q, visited);
}

import {Node} from './';

/**
 * let's say that h — distance between root and deepest(p,q)
 * time — O(h)
 * space — O(1)
 *
 * explanation:
 * let's say that LCA is l, root is r
 *
 * p travels: pl + lr + ql
 * q travels: ql + lr + pl
 *
 * end of travels will always be l (LCA).
 *
 * That's not my idea, but it's really brilliant solution!
 */
function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
	let pointer1 = p;
	let pointer2 = q;

	while (pointer1 !== pointer2) {
		pointer1 = pointer1.parent ?? q;
		pointer2 = pointer2.parent ?? p;
	}

	return pointer1;
}

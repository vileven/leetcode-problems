/**
 * time N*logN
 * space O(1) or O(logn) depends on sorting build in function
 */
function customSortString(order: string, s: string): string {
	return s
		.split('')
		.sort((a, b) => (order.indexOf(a) < order.indexOf(b) ? -1 : 1))
		.join('');
}

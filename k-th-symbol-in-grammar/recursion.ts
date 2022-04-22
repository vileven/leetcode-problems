/**
 * 1. 0
 * 2. 01
 * 3. 0110
 * 4. 01101001
 * 5. 0110100110010110
 */

// (log K) both
function kthGrammar(n: number, k: number): number {
	if (k === 2) {
		return 1;
	}

	if (n === 1 || k === 1) {
		return 0;
	}

	const prevNumber = kthGrammar(n - 1, Math.ceil(k / 2));
	const evenProp = k % 2 === 0;

	/**
	 * if prev value is 0
	 * so if k is even (like second) so it is 1, otherwise 0 => evenProp
	 *
	 * if prev value is 1
	 * if k is even it is 0, otherwise 1 => !evenProp
	 */
	return Number(prevNumber === 0 ? evenProp : !evenProp);
}

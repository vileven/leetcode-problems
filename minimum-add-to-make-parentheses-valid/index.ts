/**
 *  time O(N)
 *  space O(1)
 */
function minAddToMakeValid(s: string): number {
	let unopenedPars = 0;
	let openParsStack = 0;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char === '(') {
			openParsStack++;
			continue;
		}

		if (char === ')') {
			if (openParsStack === 0) {
				unopenedPars++;
			} else {
				openParsStack--;
			}
		}
	}

	return unopenedPars + openParsStack;
}

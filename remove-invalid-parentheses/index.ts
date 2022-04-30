function removeInvalidParentheses(s: string): string[] {
	const result = {};

	const n = s.length;

	let openToFixSource = 0,
		closeToFixSource = 0;

	for (const char of s) {
		if (char === '(') {
			openToFixSource++;
		}

		if (char === ')') {
			if (openToFixSource > 0) {
				openToFixSource--;
			} else {
				closeToFixSource++;
			}
		}
	}

	const backtrack = (
		i = 0,
		balance = 0,
		openToFix = openToFixSource,
		closeToFix = closeToFixSource,
		acc: string[] = [],
	) => {
		if (i === n) {
			if (openToFix === 0 && closeToFix === 0 && balance === 0) {
				result[acc.join('')] = true;
			}
			return;
		}

		const char = s[i];

		// try to skip this values
		if (char === '(' && openToFix > 0) {
			backtrack(i + 1, balance, openToFix - 1, closeToFix, acc);
		}

		if (char === ')' && closeToFix > 0) {
			backtrack(i + 1, balance, openToFix, closeToFix - 1, acc);
		}

		acc.push(char);

		// if char is regular letter just skip it
		if (char !== '(' && char !== ')') {
			backtrack(i + 1, balance, openToFix, closeToFix, acc);
		}

		if (char === '(') {
			backtrack(i + 1, balance - 1, openToFix, closeToFix, acc);
		}

		if (char === ')' && balance < 0) {
			backtrack(i + 1, balance + 1, openToFix, closeToFix, acc);
		}

		acc.pop();
	};

	backtrack();

	return Object.keys(result);
}

export default removeInvalidParentheses;

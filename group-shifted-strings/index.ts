const alphabetSize = 26;

/**
 * say that N — number of strings, K — longest chars in string
 *
 * time O(NK)
 * space O(NK)
 */
function groupStrings(strings: string[]): string[][] {
	const hash = {};
	for (const s of strings) {
		let key = ``;
		// creating hash
		for (let i = 1; i < s.length; i++) {
			const diff =
				(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0) + alphabetSize) %
				alphabetSize;

			key += `,${diff}`;
		}

		if (!hash.hasOwnProperty(key)) {
			hash[key] = [];
		}

		hash[key].push(s);
	}

	return Object.values(hash);
}

export default groupStrings;

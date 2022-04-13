function isDigit(char: string): boolean {
	return !isNaN(char as unknown as number) && char !== ' ';
}

function validWordAbbreviation(word: string, abbr: string): boolean {
	let i, j;
	for (i = 0, j = 0; i < abbr.length; i++, j++) {
		const char = abbr[i];

		if (isDigit(char)) {
			let value = Number(char);

			if (value === 0) {
				return false;
			}

			while (i + 1 < abbr.length && isDigit(abbr[i + 1])) {
				value = value * 10 + Number(abbr[i + 1]);
				i++;
			}
			j += value - 1;
			continue;
		}

		if (char !== word[j]) {
			return false;
		}
	}

	return j === word.length;
}

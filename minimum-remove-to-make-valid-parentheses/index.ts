function minRemoveToMakeValid(s: string): string {
	const validStack = [];
	const errorStack = [];

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (char === '(') {
			validStack.push(i);
			continue;
		}

		if (char === ')' && validStack.pop() === undefined) {
			errorStack.push(i);
		}
	}

	const sArr = s.split('');

	[...validStack, ...errorStack].forEach((value) => (sArr[value] = ''));

	return sArr.join('');
}

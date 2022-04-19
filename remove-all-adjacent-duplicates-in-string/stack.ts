function removeDuplicates(s: string): string {
	const stack = [];
	for (const char of s) {
		if (char === stack[stack.length - 1]) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join('');
}

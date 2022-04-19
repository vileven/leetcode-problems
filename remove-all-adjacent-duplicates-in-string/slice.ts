function removeDuplicates(s: string): string {
	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			s = s.slice(0, i - 1) + s.slice(i + 1);
			i = i - 1;
		}
	}

	return s;
}

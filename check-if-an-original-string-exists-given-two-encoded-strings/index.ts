function isNumber(char: string): boolean {
	return isFinite(char as unknown as number);
}

function possibleDigits(index: number, sourceString: string): number[] {
	let acc = sourceString[index];
	const result = [Number(acc)];

	let count = 1;
	while (
		count < 3 &&
		index + count < sourceString.length &&
		isNumber(sourceString[index + count])
	) {
		acc += sourceString[index + count];
		result.push(Number(acc));
		count++;
	}

	return result;
}

function possiblyEquals(s1: string, s2: string): boolean {
	const memo = {};

	const backtrack = (i1 = 0, i2 = 0, balance = 0) => {
		if (i1 >= s1.length && i2 >= s2.length) {
			return balance === 0;
		}

		const key = `${i1}-${i2}-${balance}`;
		if (key in memo) {
			return memo[key];
		}

		// Literal matching on s1[i1] and s2[i2]
		if (
			i1 < s1.length &&
			i2 < s2.length &&
			balance == 0 &&
			s1[i1] == s2[i2]
		) {
			if (backtrack(i1 + 1, i2 + 1, balance)) {
				return (memo[key] = true);
			}
		}

		// Literal matching on s1[i1]
		if (
			i1 < s1.length &&
			!isNumber(s1[i1]) &&
			balance > 0 &&
			backtrack(i1 + 1, i2, balance - 1)
		) {
			return (memo[key] = true);
		}

		// Literal matching on s2[i2]
		if (
			i2 < s2.length &&
			!isNumber(s2[i2]) &&
			balance < 0 &&
			backtrack(i1, i2 + 1, balance + 1)
		) {
			return (memo[key] = true);
		}

		// Wildcard matching on s1[i1]
		if (i1 < s1.length && isNumber(s1[i1])) {
			let i = 0;
			for (const value of possibleDigits(i1, s1)) {
				i++;
				if (backtrack(i1 + i, i2, balance - value)) {
					return (memo[key] = true);
				}
			}
		}

		// Wildcard matching on s2[i2]
		if (i2 < s2.length && isNumber(s2[i2])) {
			let i = 0;
			for (const value of possibleDigits(i2, s2)) {
				i++;
				if (backtrack(i1, i2 + i, balance + value)) {
					return (memo[key] = true);
				}
			}
		}

		return (memo[key] = false);
	};

	return backtrack();
}

export default possiblyEquals;

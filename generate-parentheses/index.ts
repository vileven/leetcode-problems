const inputs = ['(', ')'];

// O( Catalan number )

function generateParenthesis(n: number): string[] {
	const result: string[] = [];

	const stack = [];

	const backtrack = (countOpen = 0, countClose = 0): string[] => {
		if (countClose === n && countOpen === n) {
			result.push(stack.join(''));
			return;
		}

		inputs.forEach(par => {
			stack.push(par);

			if (par === '(' && countOpen < n) {
				backtrack(countOpen + 1, countClose);
			}

			if (par === ')' && countClose < n && countClose < countOpen) {
				backtrack(countOpen, countClose + 1);
			}

			stack.pop();
		});
	};

	backtrack();

	return result;
}

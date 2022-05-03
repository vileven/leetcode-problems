function addOperators(num: string, target: number): string[] {
	const result = [];

	const digits = num.split('').map(Number);

	const backtracking = (
		index: number,
		prevOperand: number,
		currentOperand: number,
		value: number,
		acc: string[],
	) => {
		if (index === num.length) {
			if (value === target && currentOperand === 0) {
				result.push(acc.slice(1).join(''));
			}
			return;
		}

		// Extending the current operand by one digit
		currentOperand = currentOperand * 10 + digits[index];
		const strOperand = String(currentOperand);

		// To avoid cases where we have 1 + 05 or 1 * 05 since 05 won't be a
		// valid operand. Hence this check
		if (currentOperand > 0) {
			backtracking(index + 1, prevOperand, currentOperand, value, acc);
		}

		// ADDITION
		acc.push('+');
		acc.push(strOperand);
		backtracking(index + 1, currentOperand, 0, value + currentOperand, acc);
		acc.pop();
		acc.pop();

		// Can subtract or multiply only if there are some previous operands
		if (acc.length) {
			// SUBTRACTION
			acc.push('-');
			acc.push(strOperand);
			backtracking(
				index + 1,
				-currentOperand,
				0,
				value - currentOperand,
				acc,
			);
			acc.pop();
			acc.pop();

			// MULTIPLICATION
			acc.push('*');
			acc.push(strOperand);
			backtracking(
				index + 1,
				currentOperand * prevOperand,
				0,
				value - prevOperand + currentOperand * prevOperand,
				acc,
			);
			acc.pop();
			acc.pop();
		}
	};

	backtracking(0, 0, 0, 0, []);

	return result;
}

export default addOperators;

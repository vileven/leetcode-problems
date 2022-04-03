const UNARY_MINUS = '-u';
const PRECEDENCE_MAP = {
	'(': -1,
	'+': 0,
	'-': 0,
	'*': 1,
	'/': 1,
	[UNARY_MINUS]: 2,
} as const;

/**
 * thats seems strange but just for passing leetcode testcases :)
 */
function jsDivide(a: number, b: number): number {
	if (a * b > 0) {
		return Math.floor(a / b);
	}

	return Math.ceil(a / b);
}

function isDigit(char: string) {
	return !isNaN(char as unknown as number) && char !== ' ';
}

function comparePrecedence(operator1: string, operator2: string): number {
	return PRECEDENCE_MAP[operator1] - PRECEDENCE_MAP[operator2];
}

function operate(operands: number[], operators: string[]) {
	const operation = operators.pop();

	switch (operation) {
		case UNARY_MINUS:
			return -operands.pop();
		case '+':
			return operands.pop() + operands.pop();
		case '-':
			return operands.pop() - operands.pop();
		case '*':
			return operands.pop() * operands.pop();
		case '/':
			return jsDivide(operands.pop(), operands.pop());
		default:
			return 0;
	}
}

/**
 * It is common algorithm to convert infix notion to reverse polish notation (RPN)
 * and processing through on go
 * @see https://en.wikipedia.org/wiki/Shunting-yard_algorithm
 */
function calculate(s: string): number {
	const operandsStack: number[] = [];
	const operatorsStack: string[] = [];
	let posibleUnaryOperator = true;

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (isDigit(char)) {
			let value = Number(char);
			while (i + 1 < s.length && isDigit(s[i + 1])) {
				value = value * 10 + Number(s[i + 1]);
				i++;
			}
			operandsStack.push(value);
			posibleUnaryOperator = false;
			continue;
		}

		if (char === ' ') {
			continue;
		}

		if (char === '(') {
			operatorsStack.push(char);
			posibleUnaryOperator = true;
			continue;
		}

		if (char === ')') {
			// while open brackets process expression
			while (operatorsStack[operatorsStack.length - 1] !== '(') {
				operandsStack.push(operate(operandsStack, operatorsStack));
			}
			operatorsStack.pop();
			posibleUnaryOperator = false;
			continue;
		}

		// char is operation
		while (
			operatorsStack.length &&
			comparePrecedence(
				char,
				operatorsStack[operatorsStack.length - 1],
			) <= 0
		) {
			operandsStack.push(operate(operandsStack, operatorsStack));
		}

		let newOp = char;
		if (char === '-' && posibleUnaryOperator) {
			newOp = UNARY_MINUS;
		}

		operatorsStack.push(newOp);
		posibleUnaryOperator = true;
	}

	while (operatorsStack.length) {
		operandsStack.push(operate(operandsStack, operatorsStack));
	}

	return operandsStack.pop();
}

export default calculate;

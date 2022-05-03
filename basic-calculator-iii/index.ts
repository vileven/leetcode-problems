const UNARY_MINUS = '-u';
const PRECEDENCE_MAP = {
	'(': -1,
	'+': 0,
	'-': 0,
	'*': 1,
	'/': 1,
	[UNARY_MINUS]: 2,
} as const;

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

	if (operation === UNARY_MINUS) {
		return -operands.pop();
	}

	const a = operands.pop();
	const b = operands.pop();

	switch (operation) {
		case '+':
			return a + b;
		case '-':
			return b - a;
		case '*':
			return a * b;
		case '/':
			return jsDivide(b, a);
		default:
			return 0;
	}
}

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
				//char precedence is less or equal than in stack — calculate
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

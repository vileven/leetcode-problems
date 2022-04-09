'use strict';

function fastPow(y: number, x: number, n: number): number {
	if (n === 0) {
		return y;
	}

	const isEven = n % 2 === 0;

	return fastPow(isEven ? y : x * y, x * x, (isEven ? n : n - 1) >> 1);
}

export function myPow(x: number, n: number): number {
	if (x === 1 || n === 1) {
		return x;
	}

	if (n === 0) {
		return 1;
	}

	if (n < 0) {
		x = 1 / x;
		n = -n;
	}

	return fastPow(1, x, n);
}

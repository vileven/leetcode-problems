'use strict';

// x^n = (x^2)^(n/2)

// 2^7 => (2^2)^3 * 2 => (2^2)^2 * 2 * 2
// 2^8 => (2^2)^4 => ((2^2)^2)^2
function fastPow(acc: number, x: number, n: number): number {
	if (n === 0) {
		return acc;
	}

	const isEven = n % 2 === 0;

	return fastPow(
		isEven ? acc : x * acc,
		x * x,
		Math.floor(isEven ? n : n - 1),
	);
}

// O(logn)
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

function myPow(x: number, n: number): number {
	if (n === 0) {
		return 1;
	}

	if (n === 1 || x === 1) {
		return x;
	}

	if (n < 0) {
		x = 1 / x;
		n = -n;
	}

	let acc = 1;
	while (n > 1) {
		if (n % 2 === 0) {
			x *= x;
			n = Math.floor(n / 2);
		} else {
			acc *= x;
			x *= x;
			n = Math.floor((n - 1) / 2);
		}
	}

	return acc * x;
}

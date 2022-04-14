const zeroCode = '0'.charCodeAt(0);

// time O(n + m)
// space O(1)
function addStrings(num1: string, num2: string): string {
	let p1 = num1.length - 1;
	let p2 = num2.length - 1;

	let s = '';
	let carry = 0;
	while (p1 >= 0 || p2 >= 0) {
		const digit1 = (num1[p1] ?? '0').charCodeAt(0) - zeroCode;
		const digit2 = (num2[p2] ?? '0').charCodeAt(0) - zeroCode;

		let sum = digit1 + digit2 + carry;

		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		} else {
			carry = 0;
		}

		s = sum + s;

		p1--;
		p2--;
	}

	return carry === 0 ? s : carry + s;
}

export default addStrings;

export function calculateSeconds(before: number, needed: number, keypad: any) {
	const xNeeded = Math.abs(
		Math.floor(keypad[before] / 3) - Math.floor(keypad[needed] / 3),
	);

	const yNeeded = Math.abs((keypad[before] % 3) - (keypad[needed] % 3));

	return Math.max(xNeeded, yNeeded);
}

export default function entryTime(s: string, keypad: string): number {
	if (s.length <= 1) {
		return 0;
	}

	let result = 0;

	for (let i = 1, previousChar = i; i < s.length; i++) {
		result += calculateSeconds(previousChar, i, keypad);
		previousChar = i;
	}

	return result;
}

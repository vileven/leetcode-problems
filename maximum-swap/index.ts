/**
 * we should
 * 1. go from left to right and find first increasing value
 * 2. find maximum right after that value inclusively
 * 3. find the most left value less then maximum from p.2
 * 3. swap it
 * time O(n)
 * space O(n)
 */
function maximumSwap(num: number): number {
	let curNum = num;

	const digitStore = [];

	// creating array of digits
	while (curNum > 0) {
		const reminder = curNum % 10;

		digitStore.push(reminder);
		curNum = (curNum - reminder) / 10;
	}

	digitStore.reverse();

	let maxIndex = null;
	let swapIndex = null;

	// from left to right in order to find first increasing value
	for (let i = 1; i < digitStore.length; i++) {
		if (digitStore[i] > digitStore[i - 1]) {
			// need to find max value after increasing
			maxIndex = i;
			for (let j = i + 1; j < digitStore.length; j++) {
				if (digitStore[maxIndex] <= digitStore[j]) {
					maxIndex = j;
				}
			}

			// need to find most left value less then max
			swapIndex = i - 1;
			for (let j = 0; j < i; j++) {
				if (digitStore[j] < digitStore[maxIndex]) {
					swapIndex = j;
					break;
				}
			}

			break;
		}
	}

	if (swapIndex !== null && maxIndex !== null) {
		// swap
		[digitStore[swapIndex], digitStore[maxIndex]] = [
			digitStore[maxIndex],
			digitStore[swapIndex],
		];

		// make the digit
		return digitStore.reduce((acc, digit) => acc * 10 + digit, 0);
	}

	return num;
}

export default maximumSwap;

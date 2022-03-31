function reverse<T = number>(nums: T[], from: number) {
	let i = from;
	let j = nums.length - 1;

	while (i < j) {
		swap(nums, i, j);
		i++;
		j--;
	}
}

function swap<T = number>(arr: T[], from: number, to: number) {
	const temp = arr[from];
	arr[from] = arr[to];
	arr[to] = temp;
}

function nextPermutation(nums: number[]): void {
	let firstDescending = nums.length - 2;

	while (firstDescending >= 0) {
		if (nums[firstDescending] < nums[firstDescending + 1]) {
			break;
		}

		firstDescending--;
	}

	let minimus = [Infinity, -1];

	for (let i = firstDescending + 1; i < nums.length; i++) {
		// find minimal value more than firstDescending
		if (nums[firstDescending] < nums[i]) {
			minimus = [nums[i], i];
		}
	}

	swap(nums, minimus[1], firstDescending);
	reverse(nums, firstDescending + 1);
}

export default nextPermutation;

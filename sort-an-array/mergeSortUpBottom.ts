function merge(arr1: number[], arr2: number[]): number[] {
	const result = [];

	let p1 = 0,
		p2 = 0;

	while (p1 < arr1.length || p2 < arr2.length) {
		let nextEl;
		switch (true) {
			case p2 === arr2.length:
			case arr1[p1] < arr2[p2]:
				nextEl = arr1[p1++];
				break;

			case p1 === arr1.length:
			case arr1[p1] >= arr2[p2]:
				nextEl = arr2[p2++];
				break;
		}

		result.push(nextEl);
	}

	return result;
}

// time O(N * log N)
// space O(N)
function sortArray(nums: number[]): number[] {
	if (nums.length <= 1) {
		return nums;
	}

	const middle = Math.floor(nums.length / 2);

	const leftArray = sortArray(nums.slice(0, middle));
	const rightArray = sortArray(nums.slice(middle, nums.length));

	return merge(leftArray, rightArray);
}

export default sortArray;

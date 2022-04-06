function squareEuclideanDistance([x, y]: number[]) {
	return x ** 2 + y ** 2;
}

function partition(points: number[][], left: number, right: number): number {
	const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
	const pivotDist = squareEuclideanDistance(points[pivotIndex]);

	while (left <= right) {
		while (squareEuclideanDistance(points[left]) < pivotDist) {
			left++;
		}

		while (squareEuclideanDistance(points[right]) > pivotDist) {
			right--;
		}

		if (left >= right) {
			break;
		}

		[points[left], points[right]] = [points[right], points[left]];
		left++;
		right--;
	}

	return left;
}

function quickSelect(points, k) {
	let left = 0;
	let right = points.length - 1;
	let pivotIndex = points.length;

	while (pivotIndex !== k) {
		// Repeatedly partition the array
		// while narrowing in on the kth element
		pivotIndex = partition(points, left, right);
		if (pivotIndex < k) {
			left = pivotIndex;
		} else {
			right = pivotIndex - 1;
		}
	}

	// Return the first k elements of the partially sorted array
	return points.slice(0, k);
}

/**
 * quickselect
 */
function kClosest(points: number[][], k: number): number[][] {
	return quickSelect(points, k);
}

export default kClosest;

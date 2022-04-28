function largestRectangleArea(heights: number[]): number {
	const n = heights.length;
	let maxArea = 0;

	const stack = [-1];

	for (let i = 0; i < n; i++) {
		while (
			stack[stack.length - 1] !== -1 &&
			heights[stack[stack.length - 1]] >= heights[i]
		) {
			const height = heights[stack.pop()];
			const width = i - stack[stack.length - 1] - 1;

			maxArea = Math.max(maxArea, height * width);
		}

		stack.push(i);
	}

	while (stack[stack.length - 1] !== -1) {
		const height = heights[stack.pop()];
		const width = n - stack[stack.length - 1] - 1;

		maxArea = Math.max(maxArea, height * width);
	}

	return maxArea;
}

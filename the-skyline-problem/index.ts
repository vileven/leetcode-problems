function merge(left: number[][], right: number[][]): number[][] {
	const nL = left.length,
		nR = right.length;

	let pL = 0,
		pR = 0;

	let currY = 0,
		leftY = 0,
		rightY = 0;

	let x, maxY;
	const output: number[][] = [];

	const updateOutput = (x: number, y: number) => {
		// if skyline change is not vertical -
		// add the new point
		if (!output.length || output[output.length - 1][0] != x)
			output.push([x, y]);
		// if skyline change is vertical -
		// update the last point
		else {
			output[output.length - 1][1] = y;
		}
	};

	const appendSkyline = (
		skyline: number[][],
		p: number,
		n: number,
		currY: number,
	) => {
		while (p < n) {
			const point = skyline[p];
			const [x, y] = point;
			p++;

			// update output
			// if there is a skyline change
			if (currY != y) {
				updateOutput(x, y);
				currY = y;
			}
		}
	};

	// while we're in the region where both skylines are present
	while (pL < nL && pR < nR) {
		const pointL = left[pL];
		const pointR = right[pR];

		// pick up the smallest x
		if (pointL[0] < pointR[0]) {
			[x, leftY] = pointL;
			pL++;
		} else {
			[x, rightY] = pointR;
			pR++;
		}

		// max height (i.e. y) between both skylines
		maxY = Math.max(leftY, rightY);

		// update output if there is a skyline change
		if (currY != maxY) {
			updateOutput(x, maxY);
			currY = maxY;
		}
	}

	// there is only left skyline
	appendSkyline(left, pL, nL, currY);

	// there is only right skyline
	appendSkyline(right, pR, nR, currY);

	return output;
}

function getSkyline(buildings: number[][]): number[][] {
	if (!buildings.length) {
		return [];
	}

	if (buildings.length === 1) {
		const [[xStart, xEnd, y]] = buildings;

		return [
			[xStart, y],
			[xEnd, 0],
		];
	}

	const middleIndex = Math.floor(buildings.length / 2);
	const leftSkyline = getSkyline(buildings.slice(0, middleIndex));
	const rightSkyline = getSkyline(buildings.slice(middleIndex));

	return merge(leftSkyline, rightSkyline);
}

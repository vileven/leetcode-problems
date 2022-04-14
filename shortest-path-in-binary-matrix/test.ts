import {shortestPathBinaryMatrix} from './bfs';

describe('shortest-path-in-binary-matrix', () => {
	it('should pass test case 1', () => {
		expect(
			shortestPathBinaryMatrix([
				[0, 1],
				[1, 0],
			]),
		).toBe(2);
	});

	it('should pass test case 2', () => {
		expect(
			shortestPathBinaryMatrix([
				[0, 1, 1, 0, 0, 0],
				[0, 1, 0, 1, 1, 0],
				[0, 1, 1, 0, 1, 0],
				[0, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 0],
			]),
		).toBe(14);
	});
});

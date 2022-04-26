import totalNQueens from './backtracking';

describe('n-queens-ii backtracking.ts', () => {
	it('should work', () => {
		expect(totalNQueens(4)).toBe(2);
	});
});

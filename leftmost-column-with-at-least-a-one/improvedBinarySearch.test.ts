import {BinaryMatrix} from './index';
import leftMostColumnWithOne from './improvedBinarySearch';

describe('leftmost-column-with-at-least-a-one improvedBinarySearch', () => {
	it('should work with second row first column', () => {
		const mat = new BinaryMatrix([
			[0, 0],
			[1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(0);
	});

	it('should work second row first column3', () => {
		const mat = new BinaryMatrix([
			[0, 0],
			[0, 0],
			[1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(0);
	});

	it('should work second row second column', () => {
		const mat = new BinaryMatrix([
			[0, 0],
			[0, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(1);
	});

	it('should work without 1s', () => {
		const mat = new BinaryMatrix([
			[0, 0],
			[0, 0],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(-1);
	});

	it('should work second  col 3x3', () => {
		const mat = new BinaryMatrix([
			[0, 0, 0],
			[0, 1, 1],
			[1, 1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(0);
	});

	it('should work last col  3x3', () => {
		const mat = new BinaryMatrix([
			[0, 0, 0],
			[0, 0, 1],
			[1, 1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(0);
	});

	it('should work 0 col 3x3', () => {
		const mat = new BinaryMatrix([
			[0, 0, 0],
			[0, 0, 0],
			[1, 1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(0);
	});

	it('should work with 4x4', () => {
		const mat = new BinaryMatrix([
			[0, 0, 0, 1],
			[0, 0, 1, 1],
			[0, 1, 1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(1);
	});

	it('should work 5x5', () => {
		const mat = new BinaryMatrix([
			[1, 1, 1, 1, 1],
			[0, 0, 0, 1, 1],
			[0, 0, 1, 1, 1],
			[0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(0);
	});

	it('should work with big matrix', () => {
		const mat = new BinaryMatrix([
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(5);
	});

	it('should pass 34 leetcode example', () => {
		const mat = new BinaryMatrix([[0, 0, 0, 1, 1, 1]]);

		expect(leftMostColumnWithOne(mat)).toBe(3);
	});

	it('should pass last leetcode example', () => {
		const mat = new BinaryMatrix([
			[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		]);

		expect(leftMostColumnWithOne(mat)).toBe(5);
	});
});

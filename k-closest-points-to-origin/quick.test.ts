import kClosest from './quick';

describe('k-closest-points-to-origin quick', () => {
	it('should work with test case 1', () => {
		expect(
			kClosest(
				[
					[1, 3],
					[-2, 2],
				],
				1,
			),
		).toStrictEqual([[-2, 2]]);
	});
});

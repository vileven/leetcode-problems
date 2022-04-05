import findBuildings from './index';

describe('buildings-with-an-ocean-view', () => {
	it('should work with example 1', () => {
		expect(findBuildings([4, 2, 3, 1])).toStrictEqual([0, 2, 3]);
	});

	it('should work with example 2', () => {
		expect(findBuildings([4, 3, 2, 1])).toStrictEqual([0, 1, 2, 3]);
	});

	it('should work with example 3', () => {
		expect(findBuildings([1, 3, 2, 4])).toStrictEqual([3]);
	});
});

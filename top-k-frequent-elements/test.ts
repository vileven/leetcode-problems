import topKFrequent from './index';

describe('top-k-frequent-elements', () => {
	it('should work with test case 1', () => {
		expect(topKFrequent([2, 2, 3, 4, 4, 4, 4], 2)).toStrictEqual([2, 4]);
	});
});

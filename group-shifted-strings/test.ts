import groupStrings from './index';

describe('group-shifted-strings', () => {
	it('should work with test case 1', () => {
		expect(
			groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']),
		).toStrictEqual([
			['abc', 'bcd', 'xyz'],
			['acef'],
			['az', 'ba'],
			['a', 'z'],
		]);
	});

	it('should work with test case 2', () => {
		expect(groupStrings(['ab', 'ba'])).toStrictEqual([['ab'], ['ba']]);
	});

	it('should work with test case 3', () => {
		expect(groupStrings(['abc', 'zab'])).toStrictEqual([['abc', 'zab']]);
	});
});

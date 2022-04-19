import maximumSwap from './index';

describe('maximum-swap', () => {
	it('should work with test case 1', () => {
		expect(maximumSwap(2736)).toBe(7236);
	});

	it('should work with test case 2', () => {
		expect(maximumSwap(9973)).toBe(9973);
	});

	it('should work with test case 3', () => {
		expect(maximumSwap(1234)).toBe(4231);
	});

	it('should work with test case 4', () => {
		expect(maximumSwap(4312)).toBe(4321);
	});

	it('should work with test case 5', () => {
		expect(maximumSwap(115)).toBe(511);
	});

	it('should work with test case 6', () => {
		expect(maximumSwap(1993)).toBe(9913);
	});

	it('should work with test case 7', () => {
		expect(maximumSwap(10909091)).toBe(90909011);
	});
});

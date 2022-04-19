import isNumber from './index';

describe('valid-number', () => {
	it('should work with test case1', () => {
		expect(isNumber('2')).toBe(true);
	});

	it('should work with test case2', () => {
		expect(isNumber('0089')).toBe(true);
	});

	it('should work with test case3', () => {
		expect(isNumber('-0.1')).toBe(true);
	});

	it('should work with test case4', () => {
		expect(isNumber('4.')).toBe(true);
	});

	it('should work with test case5', () => {
		expect(isNumber('-.9')).toBe(true);
	});

	it('should work with test case6', () => {
		expect(isNumber('2e10')).toBe(true);
	});

	it('should work with test case7', () => {
		expect(isNumber('-90E3')).toBe(true);
	});

	it('should work with test case8', () => {
		expect(isNumber('3e+7')).toBe(true);
	});

	it('should work with test case 9', () => {
		expect(isNumber('+6e-1')).toBe(true);
	});

	it('should work with test case 10', () => {
		expect(isNumber('53.5e93')).toBe(true);
	});

	it('should work with test case 11', () => {
		expect(isNumber('-123.456e789')).toBe(true);
	});

	// ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
	it('should work with test case 12', () => {
		expect(isNumber('abc')).toBe(false);
	});

	it('should work with test case 13', () => {
		expect(isNumber('1a')).toBe(false);
	});

	it('should work with test case 14', () => {
		expect(isNumber('1e')).toBe(false);
	});

	it('should work with test case 15', () => {
		expect(isNumber('e3')).toBe(false);
	});

	it('should work with test case 16', () => {
		expect(isNumber('99e2.5')).toBe(false);
	});

	it('should work with test case 17', () => {
		expect(isNumber('--6')).toBe(false);
	});

	it('should work with test case 18', () => {
		expect(isNumber('-+3')).toBe(false);
	});

	it('should work with test case 19', () => {
		expect(isNumber('95a54e53')).toBe(false);
	});

	it('should work with test case 20', () => {
		expect(isNumber('.')).toBe(false);
	});
});

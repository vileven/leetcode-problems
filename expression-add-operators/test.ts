import addOperators from './index';

describe('expression-add-operators', () => {
	it('should work with test case 0', () => {
		expect(addOperators('123', 6)).toStrictEqual(['1+2+3', '1*2*3']);
	});

	it('should work with test case 1', () => {
		expect(addOperators('232', 8)).toStrictEqual(['2+3*2', '2*3+2']);
	});

	it('should work with test case 2', () => {
		expect(addOperators('105', 5)).toStrictEqual(['10-5', '1*0+5']);
	});
});

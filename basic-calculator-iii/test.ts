import calculate from '.';

describe('tests', () => {
	it('should work with my example 0', () => {
		expect(calculate('2+2')).toBe(4);
	});

	it('should work with minus', () => {
		expect(calculate('-2+ 1')).toBe(-1);
	});

	it('should work some cases', () => {
		expect(calculate('1-(-2)')).toBe(3);
	});

	it('should work with multiply and unary minus', () => {
		expect(calculate('-5*10')).toBe(-50);
	});

	it('should work with my example 01', () => {
		expect(calculate('2+2-2')).toBe(2);
	});

	it('should work with example 1', () => {
		expect(calculate('3+2*2')).toBe(7);
	});

	it('should work with example 2', () => {
		expect(calculate(' 3/2 ')).toBe(1);
	});

	it('should work with example 3', () => {
		expect(calculate(' 3+5 / 2 ')).toBe(5);
	});

	it('should work with test case 103', () => {
		expect(calculate('14-3/2')).toBe(13);
	});

	it('should work with my example 1', () => {
		expect(calculate(' 2 + 2 ')).toBe(4);
	});

	it('should work with my example 4', () => {
		expect(calculate(' (2 + 2 + 2 + 2) / 2 ')).toBe(4);
	});

	it('should work with another test example 1', () => {
		expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23);
	});
});

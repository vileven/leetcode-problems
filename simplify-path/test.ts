import simplifyPath from './index';

describe('simplify-path', () => {
	it('should work with example1', () => {
		expect(simplifyPath('/home/')).toBe('/home');
	});

	it('should work with example2', () => {
		expect(simplifyPath('/../')).toBe('/');
	});

	it('should work with example1', () => {
		expect(simplifyPath('/home//foo/')).toBe('/home/foo');
	});

	it('should work with my case 1', () => {
		expect(simplifyPath('/home/foo/../kek')).toBe('/home/kek');
	});

	it('should work with test case 60', () => {
		expect(simplifyPath('/a/./b/../../c/')).toBe('/c');
	});
});

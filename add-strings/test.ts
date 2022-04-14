import addStrings from './index';

describe('add-strings', () => {
	it('should work with test case 1', () => {
		expect(addStrings('456', '77')).toBe('533');
	});
});

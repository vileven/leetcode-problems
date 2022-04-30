import possiblyEquals from './index';

describe('check-if-an-original-string-exists-given-two-encoded-strings', () => {
	it('should work 0', () => {
		expect(possiblyEquals('internationalization', 'i18n')).toBe(true);
	});
	it('should work 1', () => {
		expect(possiblyEquals('l123e', '44')).toBe(true);
	});

	it('should work 2', () => {
		expect(
			possiblyEquals('361u74u682u8v928v55v', '331u4u3v81u785u6u7u8'),
		).toBe(true);
	});

	it('should work 3', () => {
		expect(possiblyEquals('112s', 'g841')).toBe(true);
	});
});

import entryTime, {calculateSeconds} from './index';

describe('keyboard-hackerrank', () => {
	it('should be1', () => {
		expect(entryTime('423692', '923857614')).toBe(8);
	});

	it('should be2', () => {
		expect(entryTime('91566165', '639485712')).toBe(11);
	});
});

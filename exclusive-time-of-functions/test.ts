import exclusiveTime from './index';

describe('exclusive-time-of-functions', () => {
	it('should work with testCase 1', () => {
		expect(
			exclusiveTime(1, [
				'0:start:0',
				'0:start:2',
				'0:end:5',
				'0:start:6',
				'0:end:6',
				'0:end:7',
			]),
		).toStrictEqual([8]);
	});

	it('should work with TestCase 2', () => {
		expect(
			exclusiveTime(2, ['0:start:0', '1:start:2', '1:end:5', '0:end:6']),
		).toStrictEqual([3, 4]);
	});

	it('should work with test case 3', () => {
		expect(
			exclusiveTime(3, [
				'0:start:0',
				'0:end:0',
				'1:start:1',
				'1:end:1',
				'2:start:2',
				'2:end:2',
				'2:start:3',
				'2:end:3',
			]),
		).toStrictEqual([1, 1, 2]);
	});
});

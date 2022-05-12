import alertNames from './index';

describe('alert-using-same-key-card-three-or-more-times-in-a-one-hour-period ', () => {
	it('should work with test case 1', () => {
		expect(
			alertNames(
				['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'],
				['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00'],
			),
		).toEqual(['daniel']);
	});

	it('should work with test case 2', () => {
		expect(
			alertNames(['john', 'john', 'john'], ['23:58', '23:59', '00:01']),
		).toEqual([]);
	});

	it('should work with test case 3', () => {
		expect(
			alertNames(
				[
					'leslie',
					'leslie',
					'leslie',
					'clare',
					'clare',
					'clare',
					'clare',
				],
				['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49'],
			),
		).toEqual(['clare', 'leslie']);
	});

	it('should work with test case 4', () => {
		expect(
			alertNames(
				['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b'],
				[
					'23:20',
					'11:09',
					'23:30',
					'23:02',
					'15:28',
					'22:57',
					'23:40',
					'03:43',
					'21:55',
					'20:38',
					'00:19',
				],
			),
		).toEqual(['a']);
	});
});

const MonthMap = {
	Jan: '01',
	Feb: '02',
	Mar: '03',
	Apr: '04',
	May: '05',
	Jun: '06',
	Jul: '07',
	Aug: '08',
	Sep: '09',
	Oct: '10',
	Nov: '11',
	Dec: '12',
} as const;

function reformatDate(date: string): string {
	const [sDay, sMonth, year] = date.split(' ');

	let day = sDay.slice(0, -2);
	if (day.length === 1) {
		day = `0${day}`;
	}

	const month = MonthMap[sMonth];

	return `${year}-${month}-${day}`;
}

const ONE_HOUR = 60;

function alertNames(keyName: string[], keyTime: string[]): string[] {
	const setAlerts = new Set<string>();

	const nameToType = new Map<string, number[]>();

	keyName.forEach((key, index) => {
		if (!nameToType.has(key)) {
			nameToType.set(key, []);
		}

		nameToType
			.get(key)
			.push(
				keyTime[index]
					.split(':')
					.reduce((acc, cur) => acc * 60 + Number(cur), 0),
			);
	});

	for (const [name, logs] of nameToType) {
		if (logs.length < 2) {
			continue;
		}

		logs.sort((a, b) => a - b);

		for (let i = 2; i < logs.length; i++) {
			const log = logs[i];

			if (log - logs[i - 2] <= ONE_HOUR) {
				setAlerts.add(name);
				break;
			}
		}
	}

	return [...setAlerts].sort();
}

export default alertNames;

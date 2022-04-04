function deleteProducts(ids: number[], m: number): number {
	const hash = new Map<number, number>();

	ids.forEach((id) => {
		if (!hash.has(id)) {
			hash.set(id, 0);
		}

		hash.set(id, hash.get(id) + 1);
	});

	const size = hash.size;

	const sortedHash = [...hash.values()].sort((value1, value2) =>
		value1 < value2 ? -1 : 1,
	);

	let offset = m;
	let count = 0;
	for (let i = 0; i < sortedHash.length && offset >= 0; i++) {
		const value = sortedHash[i];

		offset -= value;
		count++;
	}

	return size - (offset === 0 ? count : count - 1);
}

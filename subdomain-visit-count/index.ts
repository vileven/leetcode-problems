function subdomainVisits(cpdomains: string[]): string[] {
	const domainsCount = new Map<string, number>();

	cpdomains.forEach(cpDomain => {
		const [countStr, fullDomain] = cpDomain.split(' ');
		const count = Number(countStr);

		const allDomainsArray = fullDomain.split('.');
		allDomainsArray.reduceRight((acc, currentPath) => {
			acc = `${currentPath}${acc}`;

			if (!domainsCount.has(acc)) {
				domainsCount.set(acc, count);
			} else {
				domainsCount.set(acc, domainsCount.get(acc) + count);
			}

			acc = `.${acc}`;

			return acc;
		}, '');
	});

	return [...domainsCount].map(([key, value]) => `${value} ${key}`);
}

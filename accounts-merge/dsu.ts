class UnionFind {
	root: number[] = [];
	rank: number[] = [];

	constructor(size: number) {
		for (let i = 0; i < size; i++) {
			this.root[i] = i;
			this.rank[i] = 1;
		}
	}

	public find(x: number): number {
		if (x === this.root[x]) {
			return x;
		}

		this.root[x] = this.find(this.root[x]);
		return this.root[x];
	}

	public connected(x: number, y: number): boolean {
		return this.find(x) === this.find(y!);
	}

	public union(x: number, y: number) {
		const rootX = this.find(x);
		const rootY = this.find(y!);

		switch (true) {
			case rootX > rootY:
				this.root[rootY] = rootX;
				break;
			case rootX < rootY:
				this.root[rootX] = rootY;
				break;
			case rootX === rootY:
				this.root[rootY] = rootX;
				this.rank[rootX]++;
		}
	}
}

/**
 * Say K — max account's length, N - number of accounts
 * Time
 * 1. We have N loop for creating UF data structure
 * 2. We have N*K*alpha(N) where alpha is inverse Ackermann function (which is less than 4 in most cases)
 * 3. We have N*K*alpha(N) for creating components
 * 4. We have N * K * log(N*K) for making result and sorting in worst case
 * So, result is
 * O(NK logNK)
 *
 * Space
 * 1. we have UF — N
 * 2. we have emailsToGroup — NK
 * 3. we have components — NK
 * O(NK)
 */
function accountsMerge(accounts: string[][]): string[][] {
	const uf = new UnionFind(accounts.length);
	const emailsToGroup = {};

	accounts.forEach((account, accountIndex) => {
		const [, ...emails] = account;

		emails.forEach(email => {
			// if it's email we've seen first — just assign it with accountIndex
			if (!emailsToGroup.hasOwnProperty(email)) {
				emailsToGroup[email] = accountIndex;
			} else {
				// if we have seen this email before
				// then union this group with the previous group of the email
				uf.union(accountIndex, emailsToGroup[email]);
			}
		});
	});

	// store emails corresponding to the component's uf group
	const components: {[gRoots: number]: string[]} = {};
	for (const email in emailsToGroup) {
		const group = emailsToGroup[email];
		const groupRoot = uf.find(group);

		if (!components.hasOwnProperty(groupRoot)) {
			components[groupRoot] = [];
		}

		components[groupRoot].push(email);
	}

	// make needed result
	const mergedAccounts = [];
	for (const groupRoot in components) {
		const emails = components[groupRoot];
		emails.sort();

		const name = accounts[groupRoot][0];

		mergedAccounts.push([name, ...emails]);
	}

	return mergedAccounts;
}

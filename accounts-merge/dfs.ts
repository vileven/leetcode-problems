function dfs(
	visited: {[email: string]: true},
	graphStructure: {[email: string]: string[]},
	mergedAccount: string[],
	email: string,
) {
	visited[email] = true;
	mergedAccount.push(email);

	if (!graphStructure.hasOwnProperty(email)) {
		return;
	}

	for (const neighbor of graphStructure[email]) {
		if (!visited[neighbor]) {
			dfs(visited, graphStructure, mergedAccount, neighbor);
		}
	}
}

/**
 * Say, that K - is maximum account length, N — number of accounts
 * time complexity — we are going twice through each email — 2NK,
 * and also sort emails which in worst case would be log(NK), so total big O —
 * O(NK  log (NK))
 * space complexity — we are having graph structure that costs NK, and visited
 * map which also NK, dfs stack trace also costs NK, sorting depends on
 * but in worst cas it takes Log NK, so total big O —
 * O(NK)
 */
function accountsMerge(accounts: string[][]): string[][] {
	const graphStructure: {[email: string]: string[]} = {};

	accounts.forEach((account) => {
		const [, firstEmail, ...emails] = account;

		if (!graphStructure.hasOwnProperty(firstEmail)) {
			graphStructure[firstEmail] = [];
		}

		emails.forEach((email) => {
			// adding edge from firstEmail to email
			graphStructure[firstEmail].push(email);

			if (!graphStructure.hasOwnProperty(email)) {
				graphStructure[email] = [];
			}
			// adding edge from email to firstEmail
			graphStructure[email].push(firstEmail);
		});
	});

	const visited = {};

	const mergedAccounts = [];
	accounts.forEach((account) => {
		const [name, firstEmail] = account;

		if (!visited[firstEmail]) {
			const mergedAccount = [];

			dfs(visited, graphStructure, mergedAccount, firstEmail);

			mergedAccount.sort();
			mergedAccount.unshift(name);
			mergedAccounts.push(mergedAccount);
		}
	});

	return mergedAccounts;
}

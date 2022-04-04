function simplifyPath(path: string): string {
	const stack = [];

	let folderName = '';

	// lets add / to end
	path = path[path.length - 1] === '/' ? path : path + '/';

	for (let i = 1; i < path.length; i++) {
		const char = path[i];

		if (char === '/') {
			if (path[i - 1] === '/') {
				continue;
			}

			if (folderName === '..') {
				stack.pop();
			} else if (folderName !== '.') {
				stack.push(folderName);
			}

			folderName = '';
			continue;
		}

		folderName += char;
	}

	return '/' + stack.join('/');
}

export default simplifyPath;

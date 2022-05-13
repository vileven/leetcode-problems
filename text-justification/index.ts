/**
 * makes string with correct spaces between words in line
 */
function fillSpaces(
	lineQueue: string[],
	neededWidth: number,
	lineWidth: number,
): string {
	const spacesCount = neededWidth - lineWidth;

	let division: number, mod: number;
	if (lineQueue.length === 1) {
		// it's important to protect against division by 0
		division = spacesCount;
		mod = 0;
	} else {
		// division — spaces we need to insert between every word
		division = Math.floor(spacesCount / (lineQueue.length - 1));
		// mod — remaining spaces we need to insert on the left side
		mod = spacesCount % (lineQueue.length - 1);
	}

	return lineQueue.reduce((acc, word, index) => {
		// add word to string
		acc += word;

		// if this world is last — just return current acc
		// except case of 1 word (here we need to insert spaces after)
		if (index === lineQueue.length - 1 && lineQueue.length !== 1) {
			return acc;
		}

		// add remaining space to the left side
		if (mod) {
			mod--;
			acc += ' ';
		}

		// add division spaces
		acc += ' '.repeat(division);

		return acc;
	}, '');
}

/**
 * time O(N)
 * space O(N)
 */
function fullJustify(words: string[], maxWidth: number): string[] {
	const result = [];
	let lineIndex = 0;
	let lineQueue = [];
	let lineWidth = 0;

	words.forEach(word => {
		// check if we can insert current word with at least 1 space between in current line
		if (word.length + lineWidth + lineQueue.length <= maxWidth) {
			// if can, just add word to current line
			lineWidth += word.length;
			lineQueue.push(word);
			return;
		}

		// if not, need to add this line to result
		result[lineIndex++] = fillSpaces(lineQueue, maxWidth, lineWidth);

		// important — we shouldn't forget to add current word to new line
		lineWidth = word.length;
		lineQueue = [word];
	});

	// last line case
	const lastLineWord = lineQueue.join(' ');
	result[lineIndex] = fillSpaces(
		[lastLineWord], // make just one word in line (last line case)
		maxWidth,
		lastLineWord.length,
	);

	return result;
}

export default fullJustify;

type Comparator<T> = (a: T, b: T) => number;

class Heap<T = number> {
	private data: T[] = [];

	private compare: Comparator<T>;

	less = (a: number, b: number) =>
		this.compare(this.data[a], this.data[b]) < 0;
	more = (a: number, b: number) =>
		this.compare(this.data[a], this.data[b]) > 0;

	constructor(comparator: Comparator<T>) {
		this.compare = comparator;
	}

	size(): number {
		return this.data.length;
	}

	add(node: T) {
		const lastIndex = this.data.length;

		this.data[lastIndex] = node;

		/**
		 * while parent is greater then swap
		 */
		let index = lastIndex;
		let parentIndex = Math.floor((index - 1) / 2);
		while (index > 0 && this.more(parentIndex, index)) {
			[this.data[index], this.data[parentIndex]] = [
				this.data[parentIndex],
				this.data[index],
			];
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	heapify(index: number) {
		const left = index * 2 + 1;
		const right = index * 2 + 2;

		let min = index;

		if (left < this.data.length && this.less(left, min)) {
			min = left;
		}

		if (right < this.data.length && this.less(right, min)) {
			min = right;
		}

		if (min !== index) {
			[this.data[min], this.data[index]] = [
				this.data[index],
				this.data[min],
			];

			this.heapify(min);
		}
	}

	pop(): T {
		const result = this.data[0];
		const lastIndex = this.data.length - 1;

		[this.data[0], this.data[lastIndex]] = [
			this.data[lastIndex],
			this.data[0],
		];
		this.data.length--;

		this.heapify(0);

		return result;
	}

	peak(): T {
		return this.data[0];
	}
}

function compareString(a: string, b: string) {
	return a.localeCompare(b);
}

function getCountedChars(s: string): {[key: string]: number} {
	const alphabet: {[key: string]: number} = {};

	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (!(char in alphabet)) {
			alphabet[char] = 0;
		}

		alphabet[char]++;
	}

	return alphabet;
}

function isAnagramWithCountedChars(
	s: string,
	sourceAlphabet: {[key: string]: number},
): boolean {
	const alphabet: {[key: string]: number} = {};
	for (let i = 0; i < s.length; i++) {
		const char = s[i];

		if (!(char in alphabet)) {
			alphabet[char] = sourceAlphabet[char] || 0;
		}

		alphabet[char]--;
	}

	for (const char in alphabet) {
		if (alphabet[char] !== 0) {
			return false;
		}
	}

	return true;
}

function funWithAnagrams(words: string[]): string[] {
	if (words.length === 1) {
		return words;
	}

	const heap = new Heap<string>(compareString);
	heap.add(words[0]);
	const alphabets = [getCountedChars(words[0])];

	for (let i = 1; i < words.length; i++) {
		const word = words[i];

		if (alphabets.some((al) => isAnagramWithCountedChars(word, al))) {
			continue;
		}

		heap.add(word);
		alphabets.push(getCountedChars(word));
	}

	const result = [];

	while (heap.size()) {
		result.push(heap.pop());
	}

	return result;
}

console.log(funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce']));

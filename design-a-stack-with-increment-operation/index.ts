class CustomStack {
	private maxSize: number;
	private array: number[] = [];

	constructor(maxSize: number) {
		this.maxSize = maxSize;
	}

	push(x: number): void {
		if (this.array.length === this.maxSize) {
			return;
		}

		this.array.push(x);
	}

	pop(): number {
		return this.array.pop() ?? -1;
	}

	increment(k: number, val: number): void {
		const loopLimit = Math.min(k, this.array.length);

		for (let i = 0; i < loopLimit; i++) {
			this.array[i] += val;
		}
	}
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

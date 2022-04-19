class MyQueue<T = number> {
	data: Array<T> = [];
	head = 0;
	tail = 0;

	enqueue(el: T): T {
		this.data[this.tail++] = el;
		return el;
	}

	dequeue(): T {
		const el = this.peek();

		this.head++;

		return el;
	}

	peek(): T {
		return this.data[this.head];
	}

	size(): number {
		return this.tail - this.head;
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	[Symbol.iterator] = () => {
		let i = this.head;
		return {
			next: () => {
				if (i < this.tail) {
					return {
						done: false,
						value: this.data[i++],
					};
				}

				return {
					done: true,
				};
			},
		};
	};
}

class MovingAverage {
	queue: MyQueue;
	size: number;
	movingWindowSum: number;

	constructor(size: number) {
		this.size = size;
		this.queue = new MyQueue<number>();
		this.movingWindowSum = 0;
	}

	next(val: number): number {
		if (this.queue.size() === this.size) {
			this.movingWindowSum -= this.queue.dequeue();
		}

		this.movingWindowSum += this.queue.enqueue(val);

		return this.movingWindowSum / this.queue.size();
	}
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

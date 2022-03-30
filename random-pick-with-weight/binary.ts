class Solution {
	cum_sums: number[];

	constructor(w: number[]) {
		this.cum_sums = [0];

		for (let i = 0; i < w.length; i++) {
			const weight = w[i];

			this.cum_sums[i + 1] = this.cum_sums[i] + weight;
		}
	}

	pickIndex(): number {
		const random = Math.random() * this.cum_sums[this.cum_sums.length - 1];

		let from = 0,
			to = this.cum_sums.length - 1;

		while (from < to) {
			const middle = Math.floor(from + (to - from) / 2);

			if (this.cum_sums[middle] < random) {
				from = middle + 1;
			} else {
				to = middle;
			}
		}

		return from - 1;
	}
}

export default Solution;

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

		for (let i = 0; i < this.cum_sums.length; i++) {
			if (this.cum_sums[i] > random) {
				return i - 1;
			}
		}

		return 0;
	}
}

export default Solution;

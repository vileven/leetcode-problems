import productExceptSelf from './index';

describe('product-of-array-except-self', () => {
	it('should work with example 1', () => {
		/**
		 * cumP = 	     [1, 1  2,  6, 24]
		 * cumReverseP = [1, 4, 12, 24, 24]
		 * res =          [24, 12,  8,  6]
		 */

		// cumP[i] = ... a[i - 2] * a[i - 1] * a[i]
		// cumReverseP[i] = ... a[i + 2] * a[i + 1] * a[i]

		// a[i] = a[i-2] * a[i - 1] * a[i + 1] * a[i + 2]
		// a[i] = cumP[i - 1] * cumReverseP[N - i - 1]

		// N = 4
		//   i         i         N - i
		// a[0] = cumP[0] * cumR[4] = 1 * 24
		// a[1] = cumP[1] * cumR[3] = 1 * 12
		// a[2] = cumP[2] * cumR[2] = 2 * 4
		// a[3] = cumP[3] * cumR[1] = 6 * 1

		expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
	});

	it('should work with example 2', () => {
		expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([
			-0, 0, 9, -0, 0,
		]);
	});
});
